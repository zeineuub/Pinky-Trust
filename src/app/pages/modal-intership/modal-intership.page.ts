import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import{Router, ChildActivationStart, ActivatedRoute, ParamMap} from '@angular/router';
import { intership } from 'src/app/models/intership';
import { IntershipService } from 'src/app/services/intership.service';
import {NgForm , FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-intership',
  templateUrl: './modal-intership.page.html',
  styleUrls: ['./modal-intership.page.scss'],
})
export class ModalIntershipPage implements OnInit {
  @Input() id: string;

  categories = new FormControl();
  categoryList: string[] = ['Cloud Computing','Security','Embedded System','Development','IoT'];
  constructor(
    private modalCtrl:ModalController,
    private route:ActivatedRoute,
    private intershipService:IntershipService,
    private router :Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
 
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Intership saved succesfully',
      duration: 1000,
      color:'success',
      position: 'top',
    });
    toast.present();
  }
  async dateToast() {
    const toast = await this.toastController.create({
      message: 'This is a warning date to must be greater then date from',
      duration: 5000,
      color:'warning',
      position: 'top',
    });
    toast.present();
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  addIntership(f:NgForm){
    console.log(this.id);

    if (f.invalid){
      return;
    }
    const Intership: intership = {
      nameintership: f.value.nameintership,
      description:f.value.description,
      category:f.value.category,
      datefrom: f.value.datefrom,
      dateto:f.value.dateto

    };
    this. intershipService.addIntership(Intership,this.id)
    .subscribe(
      res=> {
        console.log(res);
        const intershipId = res.intershipId;
        this.presentToast();
        setTimeout(()=>{
          this.modalCtrl.dismiss();
          this.router.navigate(['/home']);
        },1500)
        

      },
      err=> console.log(err)
    );

  }
  
  datesValid(f:NgForm){
    const startDate = new Date(f.value.datefrom);
    const endDate = new Date(f.value.dateto);
    if(!(endDate > startDate)){
      this.dateToast();
      return false
    }
    else{
      return true
    }
  }

}
