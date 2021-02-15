import { Component, Input, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import * as $ from 'jquery';
import { ModalCompanyPage } from '../modal-company/modal-company.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private menuCrl: MenuController,
    private modelCtrl: ModalController
  ) { }

  ngOnInit() {
    $(document).ready(function() {
      $('#myCarousel').on('slide.bs.carousel', function(e) {
        let $e = $(e.relatedTarget);
        let idx = $e.index();
        let itemsPerSlide = 3;
        let totalItems = $('.carousel-item').length;
        if (idx >= totalItems - (itemsPerSlide - 1)) {
          let it = itemsPerSlide - (totalItems - idx);
          for (let i = 0; i < it; i++) {
            // append slides to end
            if (e.direction === 'left') {
              $('.carousel-item')
                .eq(i)
                .appendTo('.carousel-inner');
            } else {
              $('.carousel-item')
                .eq(0)
                .appendTo($(this).find('.carousel-inner'));
            }
          }
        }
      });
    });
  }
openMenu(){
  this.menuCrl.open('main');
}
openModal( namecompany: string)
{
  this.modelCtrl.create({
    component: ModalCompanyPage,
    componentProps: {
      namecompany: namecompany
    }
  })
  .then(modal => {
    modal.present();
  });
}
}
