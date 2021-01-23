import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BorrowMoneyPage } from './borrow-money.page';

describe('BorrowMoneyPage', () => {
  let component: BorrowMoneyPage;
  let fixture: ComponentFixture<BorrowMoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowMoneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BorrowMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
