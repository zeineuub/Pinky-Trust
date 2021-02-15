import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import initials from 'initials';
import { LoadingController, MenuController, NavController, Platform } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-rider-menu',
  templateUrl: './rider-menu.component.html',
  styleUrls: ['./rider-menu.component.scss'],
})
export class RiderMenuComponent implements OnInit {
  public menuId = 'main';
  id:string;
  user: User;
  firstname:string;
  lastname:string;
  email:string;
 
  constructor(
    private nav: NavController,
    private menuCrl: MenuController,
    private router: Router,
    private authService: AuthService,
    

  ) {
    this.id=localStorage.getItem('_id');
    console.log(this.id);
    
  }
 
  public navigate(page: string): void {
     this.nav.navigateForward(page);
     this.menuCrl.close(this.menuId);
  }
  ngOnInit(){
    
    this.authService.getCurrentUser(this.id)
    .subscribe( res =>{
      console.log(res.user);
      this.firstname=res.user.firstname;
      this.lastname=res.user.lastname;
      this.email=res.user.email;

      console.log("this user"+this.user);
    },
    err => console.log(err)
    );
  }
  public getUserInitials() {
    if (!this.firstname) {
      return '';
    }

    return initials(this.firstname).toUppercase();
  }

  logout(){

      this.authService.logOut();
      this.menuCrl.close()
    
  }

}
