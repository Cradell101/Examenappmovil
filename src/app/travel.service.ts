// src/app/travel.service.ts

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TravelService {
    travelList: any[] = [];

    addTravel(travel: any) {
        this.travelList.push(travel);
    }
}


