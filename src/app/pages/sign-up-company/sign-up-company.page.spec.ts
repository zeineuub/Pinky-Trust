import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpCompanyPage } from './sign-up-company.page';

describe('SignUpCompanyPage', () => {
  let component: SignUpCompanyPage;
  let fixture: ComponentFixture<SignUpCompanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpCompanyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpCompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
