import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  name: string;
  email: string;
  password: string;

  constructor( private fb: FormBuilder,
               private authService: AuthService) {
    this.createForm();
    this.name = '';
    this.email = '';
    this.password = '';
   }

  ngOnInit(): void {
  }


  validateFields( filed: string ): boolean | undefined {
   return this.form.get(filed)?.invalid && this.form.get(filed)?.touched;
  }


  createForm(): void {
    this.form = this.fb.group({
      name    : ['', [ Validators.required, Validators.minLength(5) ]],
      email   : ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [ Validators.required, Validators.minLength(8)]]
    });
  }

  save(): void {
    console.log(this.form);

    this.name = this.form.controls.name.value;
    this.email = this.form.controls.email.value;
    this.password = this.form.controls.password.value;


    console.log( this.name, this.email, this.password);
    this.authService.register( this.name, this.email, this.password ).subscribe( resp => {
      console.log(resp);
    });

    this.form.reset();
  }

}
