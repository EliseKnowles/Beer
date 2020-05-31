import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarChillusComponent } from './bar-chillus.component';

describe('BarChillusComponent', () => {
  let component: BarChillusComponent;
  let fixture: ComponentFixture<BarChillusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChillusComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarChillusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
