// src/app/welcome/welcome.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  // Lista de viajes disponibles
  travelList = [
    // ... tus viajes existentes
  ];

  // Cambia el acceso de 'private' a 'public' para que sea accesible en el template
  constructor(public travelService: TravelService, private router: Router) { }

  // Función para navegar a la página principal (home)
  goToHomePage() {
    this.router.navigate(['/home']);
  }

  // Función para navegar a la página de nuevo viaje
  goToNewTripPage() {
    this.router.navigate(['/new-trip']);
  }

  // Función para agregar un nuevo viaje a la lista
  publishTrip() {
    const newTravel = {
      conductorName: 'Nuevo Conductor', // Ajusta estos valores según tu lógica
      conductorRut: '12345678-9',
      lugarOrigen: 'DuocUC Santiago',
      lugarDestino: 'Otro Lugar',
      valorMaximoPasaje: 6000,
    };

    // Agrega el nuevo viaje al servicio
    this.travelService.addTravel(newTravel);

    // Opcional: Puedes limpiar los valores o realizar otras acciones después de publicar el viaje
  }

  // Función para tomar un viaje
  tomarViaje(travel: any) {
    // Verifica si el viaje ya ha sido tomado
    if (travel.tomado) {
      alert('Este viaje ya ha sido tomado.');
    } else {
      // Actualiza el estado del viaje a tomado
      travel.tomado = true;

      // Muestra un mensaje con un popup (esto puede variar según la implementación)
      alert('¡Viaje tomado! Recibirás una llamada cuando el conductor esté listo.');
    }
  }
}

