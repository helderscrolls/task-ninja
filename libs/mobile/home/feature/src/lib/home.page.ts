import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Task, TaskService } from '@task-ninja/mobile/tasks/data-access';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'task-ninja-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  private readonly taskService = inject(TaskService);
  private readonly auth = inject(Auth);

  ownedTasksLoaded = false;
  tasksLoaded = false;
  ownedTasks: Task[] = [];
  tasks: Task[] = [];
  private isDestroyed$: Subject<void> = new Subject();
  currentUser: string;

  ngOnInit(): void {
    this.currentUser = this.auth.currentUser?.displayName as string;

    this.taskService
      .getOwnedTasks()
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe((ownedTasks) => {
        console.log('MY TASKS: ', ownedTasks);
        this.ownedTasksLoaded = true;
        this.ownedTasks = ownedTasks;
      });

    this.taskService
      .getTasks()
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe((tasks) => {
        console.log('TASKS: ', tasks);
        this.tasksLoaded = true;
        this.tasks = tasks;
      });
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(undefined);
    this.isDestroyed$.complete();
  }
}
