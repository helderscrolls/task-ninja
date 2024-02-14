import { Component, Input, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { ToastService } from '@task-ninja/mobile/shared/data-access';
import {
  Category,
  Task,
  TaskService,
} from '@task-ninja/mobile/tasks/data-access';
@Component({
  selector: 'task-ninja-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  private readonly modalController = inject(ModalController);
  private readonly loadingController = inject(LoadingController);
  private readonly formBuilder = inject(FormBuilder);
  private readonly taskService = inject(TaskService);
  private readonly toastService = inject(ToastService);

  @Input() type: string;
  @Input() taskId: string;
  @Input() selectedTask: Task;

  submitAttempt = false;
  addTaskForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    type: ['', Validators.required],
  });

  customPopoverOptions: any = {
    message: 'Select one',
    cssClass: 'popover-in-modal',
  };

  tasksType: Category[] = [
    {
      id: 1,
      name: 'Uncategorized',
      icon: 'help-outline',
    },
    {
      id: 2,
      name: 'Cleaning',
      icon: 'sparkles',
    },
    {
      id: 3,
      name: 'Maintenance',
      icon: 'build',
    },
    {
      id: 4,
      name: 'Gardening',
      icon: 'leaf',
    },
  ];

  ngOnInit(): void {
    if (this.type === 'edit-task') {
      this.addTaskForm.patchValue({
        title: this.selectedTask.title,
        description: this.selectedTask.description,
        type: this.selectedTask.type,
      });
    }
  }

  // Maybe rename this function into formControls
  // to make it more readable in the future
  get f(): { [key: string]: AbstractControl } {
    return this.addTaskForm.controls;
  }

  compareWith(o1: Task, o2: Task) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  cancel() {
    this.modalController.dismiss();
  }

  async save() {
    this.submitAttempt = true;

    if (this.addTaskForm.valid) {
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Saving task...</p><span>Please be patient.</span>',
        spinner: 'crescent',
      });
      await loading.present();

      await this.taskService.addTask(this.addTaskForm.value);

      await this.modalController.dismiss();
      await loading.dismiss();
    }
  }

  async update() {
    this.submitAttempt = true;

    if (this.addTaskForm.valid) {
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Updating task...</p><span>Please be patient.</span>',
        spinner: 'crescent',
      });
      await loading.present();

      await this.taskService.updateTask(this.addTaskForm.value, this.taskId);

      await this.modalController.dismiss();
      await loading.dismiss();

      //TODO: only show if no error
      this.toastService.presentToast(
        'Task successfully updated.',
        '',
        'top',
        'success',
        2000
      );
    }
  }
}
