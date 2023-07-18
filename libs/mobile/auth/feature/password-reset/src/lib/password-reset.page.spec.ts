import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@task-ninja/mobile/auth/data-access';
import { PasswordResetPageComponent } from './password-reset.page';

const authServiceMock = {
  resetPassword: jest.fn(),
};

describe('PasswordResetPageComponent', () => {
  let component: PasswordResetPageComponent;
  let fixture: ComponentFixture<PasswordResetPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordResetPageComponent],
      imports: [IonicModule.forRoot(), ReactiveFormsModule],
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordResetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
