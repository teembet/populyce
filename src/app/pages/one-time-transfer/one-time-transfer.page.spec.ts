import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OneTimeTransferPage } from './one-time-transfer.page';

describe('OneTimeTransferPage', () => {
  let component: OneTimeTransferPage;
  let fixture: ComponentFixture<OneTimeTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTimeTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OneTimeTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
