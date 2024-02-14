import { Component, OnInit, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonRouterOutlet,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { ToastService } from '@task-ninja/mobile/shared/data-access';
import { Task, TaskService } from '@task-ninja/mobile/tasks/data-access';
import { AddTaskComponent } from '@task-ninja/mobile/tasks/feature/add-task';
import { Observable } from 'rxjs';

@Component({
  selector: 'task-ninja-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly taskService = inject(TaskService);
  private readonly loadingController = inject(LoadingController);
  private readonly toastService = inject(ToastService);
  private readonly auth = inject(Auth);
  private readonly modalController = inject(ModalController);
  private readonly routerOutlet = inject(IonRouterOutlet);

  selectedTask$: Observable<Task>;
  selectedTaskId: string;

  ngOnInit(): void {
    this.selectedTaskId = this.route.snapshot.paramMap.get('id') as string;
    this.selectedTask$ = this.taskService.getTaskById(this.selectedTaskId);
  }

  async assignTask() {
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Assigning task...</p><span>Please be patient.</span>',
      spinner: 'crescent',
    });
    await loading.present();

    await this.taskService.assignTask(this.selectedTaskId);
    await loading.dismiss();

    this.toastService.presentToast(
      'Task assigned to: ',
      this.auth.currentUser?.displayName as string,
      'top',
      'success',
      2000
    );
  }

  async deleteTask(): Promise<void> {
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Deleting task...</p><span>Please be patient.</span>',
      spinner: 'crescent',
    });
    await loading.present();

    await this.taskService.deleteTask(this.selectedTaskId);
    await loading.dismiss();

    this.router.navigateByUrl('/tasks', { replaceUrl: true });

    this.toastService.presentToast(
      'Task successfully deleted',
      '',
      'top',
      'success',
      2000
    );
  }

  async editTask(selectedTask: Task) {
    const modal = await this.modalController.create({
      component: AddTaskComponent,
      componentProps: {
        type: 'edit-task',
        taskId: this.selectedTaskId,
        selectedTask,
      },
      presentingElement: this.routerOutlet.nativeEl,
    });
    await modal.present();
  }
}
