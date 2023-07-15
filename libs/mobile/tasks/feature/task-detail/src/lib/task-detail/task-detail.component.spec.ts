import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet, IonicModule } from '@ionic/angular';
import { TaskService } from '@task-ninja/mobile/tasks/data-access';
import { TaskDetailComponent } from './task-detail.component';

const activatedRouteMock = {
  snapshot: { paramMap: { get: () => 'id' } },
};

//TODO: Implement better mock
const firestoreMock = {
  firestore: jest.fn(),
};

//TODO: Implement better mock
const authMock = {
  auth: jest.fn(),
};

const taskServiceMock = {
  getTaskById: jest.fn(),
};

const routerOutletMock = {
  nativeEl: '',
};

describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock,
        },
        {
          provide: Auth,
          useValue: authMock,
        },
        {
          provide: TaskService,
          useValue: taskServiceMock,
        },
        {
          provide: IonRouterOutlet,
          useValue: routerOutletMock,
        },
      ],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
