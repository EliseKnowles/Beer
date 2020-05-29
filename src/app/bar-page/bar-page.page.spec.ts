import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarPagePage } from './bar-page.page';

describe('BarPagePage', () => {
  let component: BarPagePage;
  let fixture: ComponentFixture<BarPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
