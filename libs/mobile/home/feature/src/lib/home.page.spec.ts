import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  Category,
  Task,
  TaskService,
} from '@task-ninja/mobile/tasks/data-access';
import { of } from 'rxjs';
import { HomePageComponent } from './home.page';

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
    owner: 'John Doe',
    type: categoryMock,
  },
];

const taskServiceMock = {
  getOwnedTasks: jest.fn().mockReturnValue(of(taskArrayMock)),
  getTasks: jest.fn().mockReturnValue(of(taskArrayMock)),
};

//TODO: Implement better mock
const authMock = {
  auth: jest.fn(),
};

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: TaskService,
          useValue: taskServiceMock,
        },
        {
          provide: Auth,
          useValue: authMock,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
