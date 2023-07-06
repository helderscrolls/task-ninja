import { NgModule } from '@angular/core';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@task-ninja/mobile/tabs/feature').then(
        (m) => m.TabsPageComponentModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('@task-ninja/mobile/auth/feature/signin').then(
        (m) => m.SigninPageComponentModule
      ),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('@task-ninja/mobile/auth/feature/signup').then(
        (m) => m.SignupPageComponentModule
      ),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'password-reset',
    loadChildren: () =>
      import('@task-ninja/mobile/auth/feature/password-reset').then(
        (m) => m.MobileAuthFeaturePasswordResetModule
      ),
    ...canActivate(redirectLoggedInToHome),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class MobileShellRoutingModule {}
