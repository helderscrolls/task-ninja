import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MyTasksPage } from './my-tasks.page';

describe('MyTasksPage', () => {
  let component: MyTasksPage;
  let fixture: ComponentFixture<MyTasksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTasksPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MyTasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
