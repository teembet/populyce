import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoveMoneyPage } from './move-money.page';

describe('MoveMoneyPage', () => {
  let component: MoveMoneyPage;
  let fixture: ComponentFixture<MoveMoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveMoneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoveMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
