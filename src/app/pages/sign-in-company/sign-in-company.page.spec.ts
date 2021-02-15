import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignInCompanyPage } from './sign-in-company.page';

describe('SignInCompanyPage', () => {
  let component: SignInCompanyPage;
  let fixture: ComponentFixture<SignInCompanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInCompanyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInCompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
