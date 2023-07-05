import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { MobileShellRoutingModule } from './mobile-shell-routing.module';

@NgModule({
  imports: [BrowserModule, MobileShellRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class MobileShellModule {}
