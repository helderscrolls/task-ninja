import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsPageComponent } from './insights.page';

const routes: Routes = [
  {
    path: '',
    component: InsightsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsightsPageComponentRoutingModule {}
