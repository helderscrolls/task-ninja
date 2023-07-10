import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@task-ninja/mobile/auth/data-access';
import { SigninPageComponent } from './signin.page';

describe('SigninPageComponent', () => {
  let component: SigninPageComponent;
  let fixture: ComponentFixture<SigninPageComponent>;

  const authServiceMock = {
    signIn: jest.fn(),
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SigninPageComponent],
      imports: [IonicModule.forRoot(), ReactiveFormsModule],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(SigninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
