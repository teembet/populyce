import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BorrowPage } from './borrow.page';

describe('BorrowPage', () => {
  let component: BorrowPage;
  let fixture: ComponentFixture<BorrowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BorrowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
