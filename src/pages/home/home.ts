import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaHabitacionesPage } from '../lista-habitaciones/lista-habitaciones';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irAListaHabitaciones() {
    this.navCtrl.push(ListaHabitacionesPage);
  }

}
