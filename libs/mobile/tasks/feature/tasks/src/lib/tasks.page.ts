import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { FiltersComponent } from '@task-ninja/mobile/shared/feature/filters';
import { Task, TasksFacade } from '@task-ninja/mobile/tasks/data-access';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'task-ninja-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss'],
})
export class TasksPageComponent implements OnInit, OnDestroy {
  contentLoaded$: Observable<boolean>;
  tasks$: Observable<Task[]>;
  tasks: Task[] = [];
  private isDestroyed$: Subject<void> = new Subject();

  constructor(
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private tasksFacade: TasksFacade
  ) {}

  ngOnInit(): void {
    this.tasksFacade.init();
    this.tasks$ = this.tasksFacade.allTasks$;
    this.contentLoaded$ = this.tasksFacade.loaded$;
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(undefined);
    this.isDestroyed$.complete();
  }

  // TODO: Implement Filters Actions Sheet
  async filter() {
    const modal = await this.modalController.create({
      component: FiltersComponent,
      presentingElement: this.routerOutlet.nativeEl,
    });

    await modal.present();
  }
}
