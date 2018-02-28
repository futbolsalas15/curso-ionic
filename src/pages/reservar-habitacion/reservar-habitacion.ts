import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Habitacion } from '../../model/habitacion';
import { Reserva } from '../../model/reserva';
import { DetalleHabitacionPage } from '../detalle-habitacion/detalle-habitacion';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DeviceMotion } from '@ionic-native/device-motion';
import { Subscription } from 'rxjs/Subscription';

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
  formReserva: FormGroup;
  foto: string = null;
  codigoDto: string = null;
  subsVar: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cameraProv: Camera, private barCodeProv: BarcodeScanner, private deviceMotion: DeviceMotion) {
    this.habitacion = this.navParams.get("habitacion");
    this.reserva = new Reserva("", "", "", "");
    this.formReserva = new FormGroup({
      "nombres": new FormControl(this.reserva.nombres, [Validators.required, Validators.minLength(3)]),
      "apellidos": new FormControl(this.reserva.nombres, [Validators.required, Validators.minLength(3)]),
      "documento": new FormControl(this.reserva.nombres, [Validators.required, Validators.minLength(6)]),
      "telefono": new FormControl(this.reserva.nombres, [Validators.required, Validators.minLength(7)]),
    });

    let subsVar = this.deviceMotion.watchAcceleration()
      .subscribe(dataAcc => {
        console.log(JSON.stringify(dataAcc));
      }, e => console.log(JSON.stringify(e)));

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

  tomarFoto() {
    let config: CameraOptions = {
      quality: 50,
      destinationType: this.cameraProv.DestinationType.DATA_URL,
      encodingType: this.cameraProv.EncodingType.JPEG,
      mediaType: this.cameraProv.MediaType.PICTURE
    }
    this.cameraProv.getPicture(config)
      .then(imageData => {
        this.foto = 'data:image/jpeg;base64,' + imageData;
      }, e => console.log(JSON.stringify(e)));
  }

  registrarQr() {
    this.barCodeProv.scan().then((barcodeData) => {
      this.codigoDto = barcodeData.text;
    }, (err) => {
      console.log(JSON.stringify(err));
    });
  }

}
