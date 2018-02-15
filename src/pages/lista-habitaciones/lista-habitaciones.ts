import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Habitacion } from '../../model/habitacion';
import { HabitacionesProvider } from '../../providers/habitaciones/habitaciones';
import { DetalleHabitacionPage } from '../detalle-habitacion/detalle-habitacion';

/**
 * Generated class for the ListaHabitacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-habitaciones',
  templateUrl: 'lista-habitaciones.html',
})
export class ListaHabitacionesPage {

  habitaciones: Habitacion[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public habitacionesProv: HabitacionesProvider) {
  }

  ionViewDidLoad() {
    this.habitacionesProv.getListaHabitaciones().subscribe(d => {
      console.log(d);
      this.habitaciones = d
    });
  }

  verHabitacion(habitacion: Habitacion) {
    this.navCtrl.push(DetalleHabitacionPage, {
      "habitacion": habitacion
    });
  }

}
