import { TestBed } from '@angular/core/testing';

import { Firestore } from '@angular/fire/firestore';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  //TODO: Implement better mock
  const firestoreMock = {
    firestore: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Firestore,
          useValue: firestoreMock,
        },
      ],
    });
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
