// src/app/registration/registration.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'; // Import Ionic Storage

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  nombreUsuario: string = '';
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  contrasena: string = '';
  verificarContrasena: string = '';

  constructor(private router: Router, private storage: Storage) {
    // Initialize Ionic Storage
    this.initStorage();
  }

  // Initialize Ionic Storage
  async initStorage() {
    await this.storage.create();
  }

  // Método para navegar a la página de inicio (login)
  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  // Método para registrarse localmente
  registrarse() {
    // Verificar si las contraseñas coinciden
    if (this.contrasena !== this.verificarContrasena) {
      // Las contraseñas no coinciden, muestra un mensaje de error
      console.log('Las contraseñas no coinciden.');
      return;
    }

    // Las contraseñas coinciden, puedes realizar el registro localmente
    // Implementa la lógica para registrar al usuario utilizando Ionic Storage

    // Guarda los datos del usuario en Ionic Storage
    const usuario = {
      nombreUsuario: this.nombreUsuario,
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      contrasena: this.contrasena,
    };

    // Use Ionic Storage to set the user data
    this.storage.set('usuario', JSON.stringify(usuario))
      .then(() => {
        // Una vez registrado, puedes redirigir al usuario a otra página, por ejemplo, la página de inicio
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.error('Error al registrar:', error);
      });
  }
}
