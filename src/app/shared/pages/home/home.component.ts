import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { ItemsService } from '../../../items/services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  auth2: any;
  actvModal: boolean;
  infoProduct: boolean;
  activeList: boolean;

  constructor( private authService: AuthService,
               private itemsService: ItemsService,
               private router: Router) {
                 this.actvModal = false;
                 this.infoProduct = false;
                 this.activeList = true;
               }

  ngOnInit(): void {
    this.startApp();
    this.itemsService.active.subscribe( active => {
        if (active) {
          this.activeList = false;
          this.infoProduct = active;

        } else  {
          this.activeList = true;
          this.infoProduct = false;
        }
    });
  }

  startApp() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        client_id: '508845271765-ko80lhodgja5tb7jvpum09mlrut9s0a7.apps.googleusercontent.com',
      });
    });
  };

  logout() {
      this.authService.logout();
      this.router.navigateByUrl('/login');
  }




}
