import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '@task-ninja/mobile/auth/data-access';
import { SettingsComponent } from './settings.component';

//TODO: Implement better mock
const authMock = {
  auth: jest.fn(),
};

const authServiceMock = {
  signOut: jest.fn(),
};

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: Auth,
          useValue: authMock,
        },
        { provide: AuthService, useValue: authServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
