import { Component, OnDestroy, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '@task-ninja/mobile/auth/data-access';
import { Task, TaskService } from '@task-ninja/mobile/tasks/data-access';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'task-ninja-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  ownedTasksLoaded = false;
  tasksLoaded = false;
  ownedTasks: Task[] = [];
  tasks: Task[] = [];
  private isDestroyed$: Subject<void> = new Subject();
  currentUser: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private taskService: TaskService,
    private auth: Auth
  ) {}

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

  async signOut() {
    await this.authService.signOut();

    this.router.navigateByUrl('/signin', { replaceUrl: true });
  }
}
