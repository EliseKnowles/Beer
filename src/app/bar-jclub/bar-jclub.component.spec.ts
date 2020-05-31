import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarJclubComponent } from './bar-jclub.component';

describe('BarJclubComponent', () => {
  let component: BarJclubComponent;
  let fixture: ComponentFixture<BarJclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarJclubComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarJclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
