import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding,  LoadingController, ToastController } from '@ionic/angular';
import { intership } from 'src/app/models/intership';
import { IntershipService } from 'src/app/services/intership.service';

@Component({
  selector: 'app-list-intership',
  templateUrl: './list-intership.page.html',
  styleUrls: ['./list-intership.page.scss'],
})
export class ListIntershipPage implements OnInit {
  id:string;
  interships:intership[]=[]
  constructor(
    private router:Router,
    private _intershipService:IntershipService,
    private loadingCtrl : LoadingController,
    private toastController : ToastController
    ) { }
    
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000,
      color:'danger'
    });
    toast.present();
  }
  async deleteToast() {
    const toast = await this.toastController.create({
      message: 'Deleted.',
      duration: 1000,
      color:'success',
      position:'top'
    });
    toast.present();
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
  ngOnInit(){
     this._intershipService.getListintership()
    .subscribe(
      res=>{
        console.log(res)
        this.interships=res
      },
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status==401)
          {
            this.router.navigate(['/home'])
          }
        }
      }
    )
      
  }
  goTo(){
    // this.router.navigate(['/details/:id']);
  }
  ondeletIntership(name:string,slidingItem:IonItemSliding)
  { 
  
    
      this._intershipService.deleteIntership(name).subscribe(( res ) => {
        this.deleteToast();
        slidingItem.close();
        console.log(res);
        this.loading();
        setTimeout( () => {
          this.router.navigate(['/home']);
        }, 1500);
  
    },
    err => console.log(err)


    );
  }
}
