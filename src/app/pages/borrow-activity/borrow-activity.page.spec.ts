import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BorrowActivityPage } from './borrow-activity.page';

describe('BorrowActivityPage', () => {
  let component: BorrowActivityPage;
  let fixture: ComponentFixture<BorrowActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BorrowActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
