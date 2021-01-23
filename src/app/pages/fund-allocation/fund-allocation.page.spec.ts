import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FundAllocationPage } from './fund-allocation.page';

describe('FundAllocationPage', () => {
  let component: FundAllocationPage;
  let fixture: ComponentFixture<FundAllocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundAllocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FundAllocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
