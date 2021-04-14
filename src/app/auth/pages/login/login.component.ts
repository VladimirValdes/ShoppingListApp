import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  email: string;
  password: string;

  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private router: Router ) {
    this.createForm();
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
      email   : ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [ Validators.required, Validators.minLength(8)]]
    });
  }

  save(): void {

    this.email = this.form.controls.email.value;
    this.password = this.form.controls.password.value;

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Loading...'
    });

    Swal.showLoading();

    this.authService.login( this.email, this.password).subscribe( resp => {

      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('/home');

    }, ( err ) => {

      Swal.fire({
        icon: 'error',
        title: 'Error Authentication',
        text: err.error.msg
      });
    });

    this.form.reset();
  }


}
