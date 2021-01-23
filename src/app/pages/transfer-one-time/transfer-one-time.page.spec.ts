import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransferOneTimePage } from './transfer-one-time.page';

describe('TransferOneTimePage', () => {
  let component: TransferOneTimePage;
  let fixture: ComponentFixture<TransferOneTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferOneTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferOneTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
