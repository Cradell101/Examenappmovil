import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa desde @angular/router

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage {
  constructor(private router: Router) { }

  // Método para navegar a la página de inicio
  goToHomePage() {
    this.router.navigate(['/home']);
  }
}
