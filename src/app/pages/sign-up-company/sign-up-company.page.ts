import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Company } from 'src/app/models/company';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-company',
  templateUrl: './sign-up-company.page.html',
  styleUrls: ['./sign-up-company.page.scss'],
})
export class SignUpCompanyPage implements OnInit {

  id:string;
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
    this.id=localStorage.getItem('_id')

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
  signInCompany(){
    this.router.navigate(['/sign-in-compnay']);
  }
  registerUserCompany(form: NgForm)
  {
    if (form.invalid){
      return;
    }
    const usercompany: Company = {
      namecompany: form.value.namecompany,
      emailcompany: form.value.emailcompany,
      pwdcompany: form.value.pwdcompany,
      description: form.value.description,
      imageUrl: form.value.imageUrl,
    };
    this.authService.registerCompany(usercompany)
      .subscribe(
        res => {
          console.log("heree");
          console.log(res);
           //storing the token in the frontend
           localStorage.setItem('token',res.token)
          this.loading();
          setTimeout( () => {
            this.router.navigate(['/sign-in-company']);
          }, 1500);
        },
        err => console.log(err)

      ); }
}
