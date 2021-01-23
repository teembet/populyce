import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecurringTransferPage } from './recurring-transfer.page';

describe('RecurringTransferPage', () => {
  let component: RecurringTransferPage;
  let fixture: ComponentFixture<RecurringTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecurringTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
