import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the UbicarHotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ubicar-hotel',
  templateUrl: 'ubicar-hotel.html',
})
export class UbicarHotelPage {

  latitud: number;
  longitud: number;
  estadoSubscrPosicion: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private gelocationPlugin: Geolocation) {
    this.gelocationPlugin.getCurrentPosition()
      .then(coord => {
        this.latitud = coord.coords.latitude;
        this.longitud = coord.coords.longitude;
      })
      ;
    this.estadoSubscrPosicion = this.gelocationPlugin.watchPosition({ maximumAge: 1000 })
      .subscribe(coord => {
        console.log("Cambio las coordenadas: ", coord);
        this.latitud = coord.coords.latitude;
        this.longitud = coord.coords.longitude;
      });
    setTimeout(() => {
      this.estadoSubscrPosicion.unsubscribe();
    }, 20000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UbicarHotelPage');
  }

  ionViewDidLeave() {
    if (!this.estadoSubscrPosicion.closed) {
      this.estadoSubscrPosicion.unsubscribe();
    }
  }

}
