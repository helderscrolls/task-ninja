import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { TabsPageComponent } from './tabs.page';

const modalControllerMock = {
  create: jest.fn(),
};

const routerOutletMock = {
  nativeEl: '',
};

describe('TabsPageComponent', () => {
  let component: TabsPageComponent;
  let fixture: ComponentFixture<TabsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsPageComponent],
      providers: [
        {
          provide: ModalController,
          useValue: modalControllerMock,
        },
        {
          provide: IonRouterOutlet,
          useValue: routerOutletMock,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
