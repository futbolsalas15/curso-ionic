import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaHabitacionesPage } from '../lista-habitaciones/lista-habitaciones';
import { UbicarHotelPage } from '../ubicar-hotel/ubicar-hotel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {

  }

  irAListaHabitaciones() {
    this.navCtrl.push(ListaHabitacionesPage);
  }

  irAUbicarHotelCercano() {
    this.navCtrl.push(UbicarHotelPage);
  }

}
