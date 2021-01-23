import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FundsInnerPage } from './funds-inner.page';

describe('FundsInnerPage', () => {
  let component: FundsInnerPage;
  let fixture: ComponentFixture<FundsInnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsInnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FundsInnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
