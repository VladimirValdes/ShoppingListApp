import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  validateFields( filed: string ): boolean | undefined {
    return this.form.get(filed)?.invalid && this.form.get(filed)?.touched;
   }

   createForm(): void {
    this.form = this.fb.group({
      email   : ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [ Validators.required, Validators.minLength(8)]]
    });
  }

  save(): void {
    console.log(this.form);
    this.form.reset();
  }


}
