import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habitacion } from '../../model/habitacion';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/*
  Generated class for the HabitacionesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HabitacionesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HabitacionesProvider Provider');
  }

  getListaHabitaciones(): Observable<Habitacion[]> {
    return Observable.of([
      new Habitacion(101, "Economica", 100000, "assets/imgs/habitacion.jpg"),
      new Habitacion(201, "Economica", 100000, "assets/imgs/habitacion.jpg"),
      new Habitacion(301, "Economica", 120000, "assets/imgs/habitacion.jpg"),
      new Habitacion(401, "Suite", 450000, "assets/imgs/habitacion.jpg"),
      new Habitacion(501, "Suite", 500000, "assets/imgs/habitacion.jpg"),
    ]);
  }

}
