import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habitacion } from '../../model/habitacion';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

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
    return this.http.get("http://10.203.224.149:81/lista-hab.php")
      .map((res: Habitacion[]) => res);
  }

}
