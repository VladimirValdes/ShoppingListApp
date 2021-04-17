import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  email: string;
  password: string;
  auth2: any;

  private subscription: Subscription = new Subscription();


  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private router: Router ) {
    this.createForm();
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
    this.renderButton();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

    this.subscription.add(

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
      })

    );

    this.form.reset();
  }

  onSignIn( googleUser: any ) {

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Loading...'
    });

    Swal.showLoading();

    const idToken = googleUser.getAuthResponse().id_token;

    this.subscription.add(
      this.authService.googleSingIn( idToken ).subscribe( resp => {
          console.log(resp);
          Swal.close();

      }, ( err ) => {
        Swal.fire({
          icon: 'error',
          title: 'Error Authentication',
          text: err.error.msg
        });
      })
    );

    console.log(idToken);
  }


  renderButton() {
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 300,
      height: 50,
      longtitle: true,
      theme: 'dark',
    });

  this.startApp();

  }


  startApp() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        client_id: '508845271765-ko80lhodgja5tb7jvpum09mlrut9s0a7.apps.googleusercontent.com',
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  };


  attachSignin( element: any) {
    this.auth2.attachClickHandler(element, {},
        ( googleUser: any) =>  {

             console.log( googleUser.getBasicProfile().getName() );
              const idToken = googleUser.getAuthResponse().id_token;

              this.subscription.add(
                this.authService.googleSingIn( idToken ).subscribe( resp => {
                            console.log(resp);
                            this.router.navigateByUrl('/home');
                })
              );
              console.log(idToken);
        }, (error: any) => {
          alert(JSON.stringify(error, undefined, 2));
        });
  }


}
