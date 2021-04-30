import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { Category, CategoriesResponse } from '../../interfaces/categories-response';
import { ItemsService } from '../../../items/services/items.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  @Input() modalActive: boolean;
  @Output() modalActiveChanged: EventEmitter<boolean> = new EventEmitter();

  form!: FormGroup;

  data = {
    name: '',
    description: '',
    category: '',
    img: ''
  };

  showSelect: boolean | undefined;

  optActive = false;
  optionSelect: string;
  categoryId: string;
  options: Category[] = [];
  // options: string[] = [];

  constructor( private fb: FormBuilder,
               private sharedService: SharedService,
               private itemService: ItemsService) {
    this.modalActive = false;
    this.optionSelect = 'Filter by Category';
    this.categoryId = '';
    this.getCategories();
    this.createForm();
  }

  ngOnInit(): void {
  }

  validateFields( filed: string ): boolean | undefined {
    return this.form.get(filed)?.invalid && this.form.get(filed)?.touched;
  }


  createForm(): void {
    this.form = this.fb.group({
      name        : ['', [Validators.required, Validators.minLength(3)]],
      description : [''],
      category    : ['', [Validators.required, Validators.minLength(5)]],
      img         : ['']
    });
  }


  save(): void {

    this.data.name        = this.form.controls.name.value;
    this.data.description = this.form.controls.description.value;
    this.data.category    = this.form.controls.category.value || this.categoryId;
    this.data.img         = this.form.controls.img.value;




    console.log(this.data);

    this.sharedService.createProduct( this.data ).subscribe( resp => {
    });

    this.itemService.setRefresh(true);

    this.form.reset();

  }

  closeModal(): void {
    this.modalActiveChanged.emit(false);
    this.form.reset();

  }

  agregarOpcion( opcion: Category ): void {
    this.optionSelect = opcion.name;
    this.categoryId = opcion.cid;

    if (  this.categoryId.length > 0) {
        this.form.controls.category.disable();
    }
    this.optActive = false;

  }

  getCategories(): void {

    this.sharedService.getCategoriesByUser().subscribe( resp => {
      this.options = resp;
    });
  }


  // createProduct() {
  //   this.sharedService.createProduct().subscribe( resp => {
  //     console.log( resp );
  //   });
  // }

}
