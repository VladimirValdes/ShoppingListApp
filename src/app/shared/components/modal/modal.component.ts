import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { Category, CategoriesResponse } from '../../interfaces/categories-response';

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
  options: Category[] = [];
  // options: string[] = [];

  constructor( private fb: FormBuilder,
               private sharedService: SharedService) {
    this.modalActive = false;
    this.optionSelect = 'Filter by Category';
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
      description : ['', [Validators.minLength(5)]],
      category    : ['', [Validators.required, Validators.minLength(5)]],
      img         : ['']
    });
  }


  save(): void {

    this.data.name        = this.form.controls.name.value;
    this.data.description = this.form.controls.description.value;
    this.data.category    = this.form.controls.category.value;
    this.data.img         = this.form.controls.img.value;

    console.log(this.data);

    this.form.reset();

  }

  closeModal(): void {
    this.modalActiveChanged.emit(false);
    this.form.reset();

  }

  agregarOpcion( opcion: Category ): void {
    this.optionSelect = opcion.name;
    this.optActive = false;
  }

  getCategories(): void {

    this.sharedService.getCategoriesByUser().subscribe( resp => {
      this.options = resp;
    });
  }

}
