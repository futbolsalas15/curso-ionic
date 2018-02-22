import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
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
  habitacionesSinFiltrar: Habitacion[] = [];
  filtroTipo: string;
  mostrarFiltros: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public habitacionesProv: HabitacionesProvider, public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.habitacionesProv.getListaHabitaciones().subscribe(d => {
      console.log(d);
      this.habitaciones = d;
      this.habitacionesSinFiltrar = d;
    });
  }

  verHabitacion(habitacion: Habitacion) {
    this.navCtrl.push(DetalleHabitacionPage, {
      "habitacion": habitacion
    });
  }

  abrirFiltroHabitacion() {
    let ventanaAbrirFiltro = this.alertCtrl.create({
      title: 'Filtros',
      message: 'Seleccione Tipo Habitacion',
      inputs: [
        {
          label: 'Suite', type: 'radio', value: "Suite", handler: (e) => {
            this.filtroTipo = e.value;
          }
        },
        {
          label: 'Economica', type: 'radio', value: "Economica", handler: (e) => {
            this.filtroTipo = e.value;
          }
        }
      ],
      buttons: [
        {
          text: 'Filtrar', handler: () => {
            this.habitaciones = this.habitacionesSinFiltrar.filter(hab => {
              return hab.tipoSuite == this.filtroTipo;
            })
          }
        }
      ]
    });
    ventanaAbrirFiltro.present();
  }

  filtrar() {
    this.mostrarFiltros = !this.mostrarFiltros;
  }

  filtrarAction() {
    let toastMsg = this.toastCtrl.create({
      message: "Se aplica filtro por cocina",
      duration: 3000,
      position: 'top'
    });
    toastMsg.present();
    this.filtrar();
  }

}

