import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {
    const tabs = document.querySelectorAll('ion-tab-bar');
    Object.keys(tabs).map((key) => {
    tabs[key].style.display = 'none';
    });
    const button = document.querySelectorAll('ion-fab-button');
    Object.keys(button).map((key) => {
    button[key].style.visibility = 'hidden';
    });
  }
   ngOnInit() {
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
  Isuser(){
    this.loading();
    setTimeout( () => {
      this.navCtrl.navigateForward('/auth');
    }, 1500);
  }
  Iscompany(){
    this.loading();
    setTimeout( () => {
      this.navCtrl.navigateForward('/sign-in-company');
    }, 1500);
  }
}
