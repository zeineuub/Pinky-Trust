import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  id:string;
  email:string;
  firstname:string;
  lastname:string;
   re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
    console.log(this.id)

  }
   validEmail(email:string)
  {
    return this.re.test(email);

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
  signIn(){
    this.router.navigate(['/sign-in']);
  }
  registerUser(form: NgForm)
  {
    if (form.invalid){
      return;
    }
    const user: User = {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      pwd: form.value.pwd
    };

    this.authService.register(user)
      .subscribe(
        res => {
          console.log("heree");
          console.log(res);
           //storing the token in the frontend
           localStorage.setItem('token',res.token)
          this.loading();
          setTimeout( () => {
            this.router.navigate(['/home']);
          }, 1500);
        },
        err => console.log(err)

      ); }
}
