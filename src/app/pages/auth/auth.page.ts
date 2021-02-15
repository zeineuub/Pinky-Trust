import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  private loading;
  constructor(
    private router: Router,
    private fb: Facebook,
    private authService: AuthService,
    private navCtrl: NavController,
    ) {
      const tabs = document.querySelectorAll('ion-tab-bar');
      Object.keys(tabs).map((key) => {
      tabs[key].style.display = 'none';
      });
  }
  ngOnInit() {
  }
  signIn()
  {
  this.navCtrl.navigateForward('/sign-in');
  }
  signUp(){
    this.navCtrl.navigateForward('/sign-up');
  }

  onLoginSuccess(res: FacebookLoginResponse) {
   

  }
  doGoogleLogin(){

  }
}
