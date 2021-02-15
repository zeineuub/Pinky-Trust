import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListIntershipPage } from './list-intership.page';

describe('ListIntershipPage', () => {
  let component: ListIntershipPage;
  let fixture: ComponentFixture<ListIntershipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIntershipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListIntershipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
