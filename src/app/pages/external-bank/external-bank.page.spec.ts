import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExternalBankPage } from './external-bank.page';

describe('ExternalBankPage', () => {
  let component: ExternalBankPage;
  let fixture: ComponentFixture<ExternalBankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalBankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExternalBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
