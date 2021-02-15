import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AccountSettingsInterface } from 'src/app/models/account-settings';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  id:string;
  constructor(
    private loadingCtrl:LoadingController,
    private authService:AuthService,
    private router:Router,
    public toastController: ToastController
  ) { 
    
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'User  succesfully updated',
      duration: 1500,
      color:'success'
    });
    toast.present();
  }
  ngOnInit() {
    this.id=localStorage.getItem('_id');
    console.log(this.id);
  }
  public submit( f:NgForm): void {
    const user: AccountSettingsInterface = {
      firstname: f.value.firstname,
      lastname:f.value.lastname,
      email: f.value.email,
      
    };
    this.authService.updateUser(user,this.id)
    .subscribe(res=>{
      console.log(res);
      this.presentToast();
      setTimeout(()=>{
        
        this.router.navigate(['/home']);
      },2000)

    })
}
}
