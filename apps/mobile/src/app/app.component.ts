import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ToastService } from '@task-ninja/mobile/shared/data-access';
import { environment } from '../environments/environment';

@Component({
  selector: 'task-ninja-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private swUpdate: SwUpdate, private toastService: ToastService) {}

  async ngOnInit() {
    if (environment.production) {
      this.swUpdate.versionUpdates.subscribe(async (res) => {
        if (res.type === 'VERSION_READY') {
          const toast = await this.toastService.updateAvailableToast();

          toast
            .onDidDismiss()
            .then(() => this.swUpdate.activateUpdate())
            .then(() => window.location.reload());
        }
      });

      this.swUpdate.checkForUpdate();

      setInterval(() => {
        this.swUpdate.checkForUpdate();
      }, 15 * 60 * 1000);

      if (!this.swUpdate.isEnabled) {
        console.log('swUpdate Enabled ? Nope :(');
      } else {
        console.log('swUpdate Enabled ? Yes :)');
      }
    }
  }
}
