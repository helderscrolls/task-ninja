import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonRouterOutlet, IonicModule } from '@ionic/angular';
import {
  Category,
  Task,
  TasksFacade,
} from '@task-ninja/mobile/tasks/data-access';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { TasksPageComponent } from './tasks.page';

describe('TasksPageComponent', () => {
  let component: TasksPageComponent;
  let fixture: ComponentFixture<TasksPageComponent>;

  const categoryMock: Category = {
    id: 69,
    name: 'Cleaning',
    icon: 'sparkle',
  };

  const taskArrayMock: Task[] = [
    {
      title: 'Clean windows',
      description: 'Clean upstairs windows',
      owner: 'John Doe',
      type: categoryMock,
    },
    {
      title: 'Fix radiators',
      description: 'Fix bedroom radiator',
      owner: 'Karen Doe',
      type: categoryMock,
    },
  ];

  const taskFacadeMock = {
    allTasks$: of(taskArrayMock),
    loaded$: of(true),
    init: jest.fn(),
  };

  const routerOutletMock = {
    nativeEl: '',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksPageComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: IonRouterOutlet,
          useValue: routerOutletMock,
        },
        {
          provide: TasksFacade,
          useValue: taskFacadeMock,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
