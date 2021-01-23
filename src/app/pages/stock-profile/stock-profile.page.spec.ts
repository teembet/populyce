import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockProfilePage } from './stock-profile.page';

describe('StockProfilePage', () => {
  let component: StockProfilePage;
  let fixture: ComponentFixture<StockProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
