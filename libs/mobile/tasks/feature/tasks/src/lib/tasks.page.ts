import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task, TaskService } from '@task-ninja/mobile/tasks/data-access';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'task-ninja-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss'],
})
export class TasksPageComponent implements OnInit, OnDestroy {
  contentLoaded = false;
  tasks: Task[] = [];
  private isDestroyed$: Subject<void> = new Subject();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService
      .getTasks()
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe((tasks) => {
        this.contentLoaded = true;
        this.tasks = tasks;
      });
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(undefined);
    this.isDestroyed$.complete();
  }
}
