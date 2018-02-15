import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Habitacion } from '../../model/habitacion';
import { Reserva } from '../../model/reserva';
import { DetalleHabitacionPage } from '../detalle-habitacion/detalle-habitacion';

/**
 * Generated class for the ReservarHabitacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservar-habitacion',
  templateUrl: 'reservar-habitacion.html',
})
export class ReservarHabitacionPage {

  habitacion: Habitacion;
  reserva: Reserva;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.habitacion = this.navParams.get("habitacion");
    this.reserva = new Reserva("", "", "", "");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservarHabitacionPage');
  }

  hacerReserva() {
    this.habitacion.reserva = this.reserva;
    setTimeout(function () {
      this.navCtrl.setRoot(DetalleHabitacionPage, {
        habitacion: this.habitacion
      });
    }, 2000);

  }

}
