import { TestBed } from '@angular/core/testing';

import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { TaskService } from './task.service';

//TODO: Implement better mock
const firestoreMock = {
  firestore: jest.fn(),
};

//TODO: Implement better mock
const authMock = {
  auth: jest.fn(),
};

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Firestore,
          useValue: firestoreMock,
        },
        {
          provide: Auth,
          useValue: authMock,
        },
      ],
    });
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
