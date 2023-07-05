import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTasksPage } from './my-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: MyTasksPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTasksPageRoutingModule {}
