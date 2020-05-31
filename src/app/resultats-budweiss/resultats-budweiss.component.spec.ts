import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultatsBudweissComponent } from './resultats-budweiss.component';

describe('ResultatsBudweissComponent', () => {
  let component: ResultatsBudweissComponent;
  let fixture: ComponentFixture<ResultatsBudweissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatsBudweissComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultatsBudweissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
