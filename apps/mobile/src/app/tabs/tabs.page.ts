import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'task-ninja-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private actionSheetController: ActionSheetController) {}

  async selectAction() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose an action',
      cssClass: 'custom-action-sheet',
      buttons: [
        {
          text: 'Add account',
          icon: 'wallet',
          handler: () => {
            // Put in logic ...
          },
        },
        {
          text: 'Add transaction',
          icon: 'swap-horizontal-outline',
          handler: () => {
            // Put in logic ...
          },
        },
        {
          text: 'Set budget',
          icon: 'calculator',
          handler: () => {
            // Put in logic ...
          },
        },
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
