import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntershipItemDetailPage } from './intership-item-detail.page';

describe('IntershipItemDetailPage', () => {
  let component: IntershipItemDetailPage;
  let fixture: ComponentFixture<IntershipItemDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntershipItemDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntershipItemDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
