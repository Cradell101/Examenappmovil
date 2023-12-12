// src/app/new-trip/new-trip.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.page.html',
  styleUrls: ['./new-trip.page.scss'],
})
export class NewTripPage {
  // Propiedades para el formulario
  conductorName!: string;
  conductorRut!: string;
  lugarOrigen!: string;
  lugarDestino!: string;
  valorMaximoPasaje!: number;

  constructor(private router: Router, private travelService: TravelService) { }

  // Función para publicar el viaje
  publishTravel() {
    const newTravel = {
      conductorName: this.conductorName,
      conductorRut: this.conductorRut,
      lugarOrigen: this.lugarOrigen,
      lugarDestino: this.lugarDestino,
      valorMaximoPasaje: this.valorMaximoPasaje,
    };

    // Agregar el viaje a la lista de viajes disponibles a través del servicio
    this.travelService.addTravel(newTravel);

    this.router.navigate(['/welcome']);  // Navega de nuevo a la página de bienvenida después de publicar el viaje
  }
}

