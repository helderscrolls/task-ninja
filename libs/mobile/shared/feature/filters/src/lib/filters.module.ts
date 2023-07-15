import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FiltersRoutingModule } from './filters-routing.module';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FiltersRoutingModule],
  declarations: [FiltersComponent],
  exports: [FiltersComponent],
})
export class FiltersModule {}
