import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarSiraniPubComponent } from './bar-sirani-pub.component';

describe('BarSiraniPubComponent', () => {
  let component: BarSiraniPubComponent;
  let fixture: ComponentFixture<BarSiraniPubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarSiraniPubComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarSiraniPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
