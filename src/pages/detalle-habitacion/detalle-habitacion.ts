import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Habitacion } from '../../model/habitacion';
import { ReservarHabitacionPage } from '../reservar-habitacion/reservar-habitacion';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the DetalleHabitacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-habitacion',
  templateUrl: 'detalle-habitacion.html',
})
export class DetalleHabitacionPage {

  habitacion: Habitacion;
  iconoFavorito: string = 'heart-outline';

  constructor(public navCtrl: NavController, public navParams: NavParams, public favoritos: FavoritosProvider) {
    this.habitacion = this.navParams.get("habitacion");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleHabitacionPage');
  }

  reservar() {
    this.navCtrl.push(ReservarHabitacionPage, {
      habitacion: this.habitacion
    });
  }

  marcarFavorito() {
    this.favoritos.guardarHabitacionComoFavorito(this.habitacion)
      .then(r => this.iconoFavorito = 'heart');
  }

}
