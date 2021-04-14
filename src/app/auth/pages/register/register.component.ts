import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


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
               private authService: AuthService,
               private router: Router) {
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

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Loading...'
    });

    Swal.showLoading();


    this.authService.register( this.name, this.email, this.password ).subscribe( resp => {

      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('/login');

    }, ( err ) => {


      Swal.fire({
        icon: 'error',
        title: 'Error Authentication',
        text: err.error.errors[0].msg
      });

    });

    this.form.reset();
  }

}
