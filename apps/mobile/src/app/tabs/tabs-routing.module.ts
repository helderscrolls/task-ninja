import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('@task-ninja/mobile/home/feature').then(
            (m) => m.HomePageComponentModule
          ),
      },
      {
        path: 'insights',
        loadChildren: () =>
          import('@task-ninja/mobile/insights/feature').then(
            (m) => m.InsightsPageComponentModule
          ),
      },
      {
        path: 'my-tasks',
        loadChildren: () =>
          import('../my-tasks/my-tasks.module').then(
            (m) => m.MyTasksPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
