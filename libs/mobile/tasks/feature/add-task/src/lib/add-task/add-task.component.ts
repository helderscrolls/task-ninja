import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { Category, TaskService } from '@task-ninja/mobile/tasks/data-access';
@Component({
  selector: 'task-ninja-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
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
      id: 3,
      name: 'Gardening',
      icon: 'leaf',
    },
  ];

  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  // Maybe rename this function into formControls
  // to make it more readable in the future
  get f(): { [key: string]: AbstractControl } {
    return this.addTaskForm.controls;
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
}
