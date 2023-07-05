import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsightsPageComponent } from './insights.page';

describe('InsightsPageComponent', () => {
  let component: InsightsPageComponent;
  let fixture: ComponentFixture<InsightsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsightsPageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(InsightsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
