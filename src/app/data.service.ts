// src/app/services/data.service.ts

import { Injectable } from '@angular/core';

// Interfaz para describir la estructura de un viaje
export interface Travel {
  conductorName: string;
  conductorRut: string;
  lugarOrigen: string;
  lugarDestino: string;
  valorMaximoPasaje: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private travelList: Travel[] = [];

  constructor() { }

  getTravelList() {
    return this.travelList;
  }

  // Usa la interfaz Travel para el tipo del parámetro travel
  addTravel(travel: Travel) {
    this.travelList.push(travel);
  }
}


