import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaHabitacionesPage } from './lista-habitaciones';

@NgModule({
  declarations: [
    ListaHabitacionesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaHabitacionesPage),
  ],
})
export class ListaHabitacionesPageModule {}
