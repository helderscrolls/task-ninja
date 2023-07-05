import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { MobileShellModule } from '@task-ninja/mobile/shell/feature';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [IonicModule.forRoot(), MobileShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
