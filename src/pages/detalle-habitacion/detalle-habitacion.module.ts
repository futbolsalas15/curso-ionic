import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleHabitacionPage } from './detalle-habitacion';

@NgModule({
  declarations: [
    DetalleHabitacionPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleHabitacionPage),
  ],
})
export class DetalleHabitacionPageModule {}
