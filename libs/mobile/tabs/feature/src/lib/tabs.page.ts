import { Component } from '@angular/core';
import {
  ActionSheetController,
  IonRouterOutlet,
  ModalController,
} from '@ionic/angular';
import { AddTaskComponent } from '@task-ninja/mobile/tasks/feature/add-task';

@Component({
  selector: 'task-ninja-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPageComponent {
  constructor(
    private actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {}

  async selectAction() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose an action',
      cssClass: 'custom-action-sheet',
      buttons: [
        {
          text: 'Add task',
          icon: 'newspaper',
          handler: async () => {
            const modal = await this.modalController.create({
              component: AddTaskComponent,
              componentProps: { type: 'add-task' },
              presentingElement: this.routerOutlet.nativeEl,
            });
            return await modal.present();
          },
        },
        {
          text: 'Add grocery item',
          icon: 'cart-outline',
          handler: () => {
            // Put in logic ...
          },
        },
        // {
        //   text: 'Set budget',
        //   icon: 'calculator',
        //   handler: () => {
        //     // Put in logic ...
        //   },
        // },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }
}
