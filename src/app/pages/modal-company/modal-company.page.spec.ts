import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCompanyPage } from './modal-company.page';

describe('ModalCompanyPage', () => {
  let component: ModalCompanyPage;
  let fixture: ComponentFixture<ModalCompanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCompanyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
