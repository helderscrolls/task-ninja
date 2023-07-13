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
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@task-ninja/mobile/tasks/feature/tasks').then(
                (m) => m.TasksPageComponentModule
              ),
          },
          {
            path: 'detail/:id',
            loadChildren: () =>
              import('@task-ninja/mobile/tasks/feature/task-detail').then(
                (m) => m.TaskDetailModule
              ),
          },
        ],
      },
      {
        path: 'groceries',
        loadChildren: () =>
          import('@task-ninja/mobile/groceries/feature').then(
            (m) => m.GroceriesPagesComponentModule
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
