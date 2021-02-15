import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  id:string;
  user: User;
  constructor(
    private router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController
    ) {
      const tabs = document.querySelectorAll('ion-tab-bar');
      Object.keys(tabs).map((key) => {
      tabs[key].style.display = 'none';
      });
   }

   async ngOnInit() {
    this.id=localStorage.getItem('_id');
    console.log(this.id);

  }
  async loading()
  {
    const load = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Veillez patientez ...',
      duration: 1400
    });
    await load.present();
    await load.onDidDismiss();
  }
  signUp(){
  this.router.navigate(['/sign-up']);
  }
  login(email: string, pwd: string)
  {
    this.authService.logIn(email, pwd)
    .subscribe(res => {
      //storing the token in the frontend
      localStorage.setItem('token',res.token)
      localStorage.setItem('_id',res._id)
      this.loading();
      setTimeout( () => {
        this.router.navigate(['/home']);
      }, 1500);
    },
    err => console.log(err)
    );
  }

}
