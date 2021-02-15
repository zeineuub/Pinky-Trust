import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalIntershipPage } from './modal-intership.page';

describe('ModalIntershipPage', () => {
  let component: ModalIntershipPage;
  let fixture: ComponentFixture<ModalIntershipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIntershipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalIntershipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
