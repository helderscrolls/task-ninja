import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {
  Category,
  Task,
  TaskService,
} from '@task-ninja/mobile/tasks/data-access';

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
  const taskServiceMock = {
    getTasks: jest.fn().mockReturnValue(of(taskArrayMock)),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksPageComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: TaskService,
          useValue: taskServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
