import { TestBed } from '@angular/core/testing';

import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  //TODO: Implement better mock
  const authMock = {
    auth: jest.fn(),
  };

  //TODO: Implement better mock
  const firestoreMock = {
    firestore: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Auth,
          useValue: authMock,
        },
        {
          provide: Firestore,
          useValue: firestoreMock,
        },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
