import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { TaskService } from '@task-ninja/mobile/tasks/data-access';
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

  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  cancel() {
    this.modalController.dismiss();
  }

  // Save card
  async save() {
    this.submitAttempt = true;

    // If form valid
    if (this.addTaskForm.valid) {
      // Loading overlay
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
