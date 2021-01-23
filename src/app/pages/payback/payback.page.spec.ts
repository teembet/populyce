import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaybackPage } from './payback.page';

describe('PaybackPage', () => {
  let component: PaybackPage;
  let fixture: ComponentFixture<PaybackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaybackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaybackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
