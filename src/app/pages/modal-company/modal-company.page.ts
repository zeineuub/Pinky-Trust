import { Component, OnInit,Input } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-company',
  templateUrl: './modal-company.page.html',
  styleUrls: ['./modal-company.page.scss'],
})
export class ModalCompanyPage implements OnInit {
  @Input() namecompany: string;
  companyDetails: Company;
  constructor(
    private companyService: CompanyService,
    private router:Router,
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {
    console.log(this.namecompany)
    this.companyService.companyDetails(this.namecompany)
      .subscribe(res=>{
        console.log(res);
        this.companyDetails=res;
      },
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status==401)
          {
            this.router.navigate(['/auth'])
          }
        }
      }
      )
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
