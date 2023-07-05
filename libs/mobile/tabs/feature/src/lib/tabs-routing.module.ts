import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPageComponent } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPageComponent,
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
        path: 'tasks',
        loadChildren: () =>
          import('@task-ninja/mobile/tasks/feature').then(
            (m) => m.TasksPageComponentModule
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
export class TabsPageComponentRoutingModule {}
