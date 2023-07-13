import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from '@task-ninja/mobile/auth/data-access';
import {
  Category,
  Task,
  TaskService,
} from '@task-ninja/mobile/tasks/data-access';
import { of } from 'rxjs';
import { HomePageComponent } from './home.page';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

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

  const authServiceMock = {
    signOut: jest.fn(),
  };

  const taskServiceMock = {
    getOwnedTasks: jest.fn().mockReturnValue(of(taskArrayMock)),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        {
          provide: TaskService,
          useValue: taskServiceMock,
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
