import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { ListaHabitacionesPage } from '../lista-habitaciones/lista-habitaciones';
import { LoginPage } from '../login/login';

/**
 * Generated class for the HomeTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-tabs',
  templateUrl: 'home-tabs.html',
})
export class HomeTabsPage {

  listaHab: ListaHabitacionesPage;
  login: LoginPage;
  @ViewChild("tabEl") elementTab: Tabs;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.elementTab.select(1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTabsPage');
  }

}
