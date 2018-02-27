import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Subscription } from 'rxjs/Subscription';
import { GoogleMaps, GoogleMap, GoogleMapOptions, GoogleMapsEvent } from '@ionic-native/google-maps';

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
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private gelocationPlugin: Geolocation, private googleMapsPlug: GoogleMaps) {
    this.gelocationPlugin.getCurrentPosition()
      .then(coord => {
        this.latitud = coord.coords.latitude;
        this.longitud = coord.coords.longitude;
      })
      ;
    /*
  this.estadoSubscrPosicion = this.gelocationPlugin.watchPosition({ maximumAge: 1000 })
    .subscribe(coord => {
      console.log("Cambio las coordenadas: ", coord);
      this.latitud = coord.coords.latitude;
      this.longitud = coord.coords.longitude;
    });
  setTimeout(() => {
    this.estadoSubscrPosicion.unsubscribe();
  }, 20000);
  */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UbicarHotelPage');
    this.cargarMapa();
  }

  ionViewDidLeave() {
    if (!this.estadoSubscrPosicion.closed) {
      this.estadoSubscrPosicion.unsubscribe();
    }
  }

  cargarMapa() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    let positionPromise = this.gelocationPlugin.getCurrentPosition()
      .then(coord => {
        this.latitud = coord.coords.latitude;
        this.longitud = coord.coords.longitude;
        return coord;
      });



    // Wait the MAP_READY before using any methods.
    positionPromise.then(c => {
      mapOptions.camera.target.lat = this.latitud;
      mapOptions.camera.target.lng = this.longitud;
      this.map = this.googleMapsPlug.create('map_canvas', mapOptions);
      this.map.one(GoogleMapsEvent.MAP_READY)
        .then(() => {
          console.log('Map is ready!');

          //this.map.moveCamera({ target: { lat: this.latitud, lng: this.longitud } });

          // Now you can use all methods safely.
          this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: this.latitud,
              lng: this.longitud
            }
          })
            .then(marker => {
              marker.on(GoogleMapsEvent.MARKER_CLICK)
                .subscribe(() => {
                  alert('clicked');
                });
            });
        });
    })


  }

}
