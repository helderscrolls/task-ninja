import { Component, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Category } from '@task-ninja/mobile/tasks/data-access';

@Component({
  selector: 'task-ninja-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  private readonly modalController = inject(ModalController);

  customPopoverOptions: any = {
    message: 'Select one',
    cssClass: 'popover-in-modal',
  };

  filters: any = ['abc'];

  tasksType: Category[] = [
    {
      id: 0,
      name: 'All',
      icon: '',
    },
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

  // Cancel
  cancel() {
    // Dismiss modal
    this.modalController.dismiss();
  }

  // Apply filter
  apply() {
    // Add filter logic here...
    // ...

    // Dismiss modal and apply filters
    this.modalController.dismiss(this.filters);
  }
}
