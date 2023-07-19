import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { TasksDataAccessModule } from '@task-ninja/mobile/tasks/data-access';
import { MobileShellRoutingModule } from './mobile-shell-routing.module';

@NgModule({
  imports: [BrowserModule, MobileShellRoutingModule, TasksDataAccessModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class MobileShellModule {}
