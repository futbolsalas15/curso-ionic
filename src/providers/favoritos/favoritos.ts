import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Habitacion } from '../../model/habitacion';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello FavoritosProvider Provider');
  }

  guardarHabitacionComoFavorito(hab: Habitacion) {
    return this.storage.get("favoritos")
      .then(pref => {
        if (pref == null) {
          pref = [];
        }
        pref.push(hab);
        return this.storage.set("favoritos", pref);
      })
      .catch(e => console.log(e));
  }


}
