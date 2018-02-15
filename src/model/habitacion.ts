import { Reserva } from "./reserva";


export class Habitacion {
    constructor(
        public noHabitacion: number,
        public tipoSuite: string,
        public precio: number,
        public foto: string,
        public reserva?: Reserva) {

    }
}