import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CashAllocationPage } from './cash-allocation.page';

describe('CashAllocationPage', () => {
  let component: CashAllocationPage;
  let fixture: ComponentFixture<CashAllocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashAllocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CashAllocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
