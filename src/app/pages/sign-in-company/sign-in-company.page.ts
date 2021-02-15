import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-company',
  templateUrl: './sign-in-company.page.html',
  styleUrls: ['./sign-in-company.page.scss'],
})
export class SignInCompanyPage implements OnInit {
  id:string;
  user:User;
  constructor(
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private navCtrl: NavController,
    private router:Router
  ) {
    const tabs = document.querySelectorAll('ion-tab-bar');
    Object.keys(tabs).map((key) => {
    tabs[key].style.display = 'none';
    });
  }

  async ngOnInit() {
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
  signUpCompany(){
    this.router.navigate(['/sign-up-company']);
    }
  loginCompany(email: string, pwd: string)
  {
    this.authService.logInCompany(email, pwd)
    .subscribe(res => {
      //storing the token in the frontend
      localStorage.setItem('token',res.token);
      localStorage.setItem('_id',res._id);
      this.loading();
      setTimeout( () => {
        this.router.navigate(['/home']);
      }, 1500);
    },
    err => console.log(err)
    );
  }
}
