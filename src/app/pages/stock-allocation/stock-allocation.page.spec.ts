import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockAllocationPage } from './stock-allocation.page';

describe('StockAllocationPage', () => {
  let component: StockAllocationPage;
  let fixture: ComponentFixture<StockAllocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockAllocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockAllocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
