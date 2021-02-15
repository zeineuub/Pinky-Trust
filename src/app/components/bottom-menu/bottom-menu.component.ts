import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalIntershipPage } from 'src/app/pages/modal-intership/modal-intership.page';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss'],
})
export class BottomMenuComponent implements OnInit {
  userId:string;
  constructor(
    private router:Router,
    private modalCtrl: ModalController,
    private route:ActivatedRoute,

  ) { }

  ngOnInit() {

    this.userId=localStorage.getItem('_id');
    console.log(this.userId);
  }
  addIntership()
  {
    // console.log('heree');
    this.modalCtrl.create({
      component: ModalIntershipPage,
      componentProps: {
        id: this.userId
      }
    })
    .then(modal => {
      modal.present();
    });
  }

}
