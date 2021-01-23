import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanAllocationPage } from './loan-allocation.page';

describe('LoanAllocationPage', () => {
  let component: LoanAllocationPage;
  let fixture: ComponentFixture<LoanAllocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAllocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanAllocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
