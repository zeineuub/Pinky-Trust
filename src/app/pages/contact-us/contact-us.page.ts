import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  constructor(
    private menuCrl: MenuController
  ) { }

  ngOnInit() {
  }
  openMenu(){
    this.menuCrl.open('main');
  }
}
