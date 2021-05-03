import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { Category, CategoriesResponse } from '../../interfaces/categories-response';
import { ItemsService } from '../../../items/services/items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {


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
  newCategoryId: string;
  options: Category[] = [];

  private subscription: Subscription = new Subscription();


  constructor( private fb: FormBuilder,
               private sharedService: SharedService,
               private itemService: ItemsService) {
    this.modalActive = false;
    this.optionSelect = 'Filter by Category';
    this.categoryId = '';
    this.newCategoryId = '';
    this.getCategories();
    this.createForm();
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
    this.newCategoryId    = this.form.controls.category.value;
    this.data.img         = this.form.controls.img.value;

    if (this.newCategoryId) {
      console.log('I have a value inside me');
      this.sharedService.createCategory( this.newCategoryId ).subscribe( resp => {
        console.log(resp);
        this.data.category = resp.category.cid;
        this.createProduct( this.data );
        this.getCategories();
      });


    } else  {

      this.data.category = this.categoryId;
      this.createProduct( this.data );


    }





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

    this.subscription.add(
        this.sharedService.getCategoriesByUser().subscribe( resp => {
        this.options = resp;
        })
    );
  }

  createProduct( data: any ): void {

    this.subscription.add(
      this.sharedService.createProduct( data ).subscribe( resp => {})
    );

    this.itemService.setRefresh(true);



  }


}
