// login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import * as AuthActions from '../auth/auth.actions';
import * as AuthSelectors from '../auth/auth.reducer'; // Ajusta la ruta según sea necesario
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private store: Store,
    private authService: AuthService
  ) { }

  async login() {
    try {
      const isAuthenticated = await this.store.pipe(select(AuthSelectors.selectIsAuthenticated)).toPromise();

      if (isAuthenticated) {
        this.router.navigate(['/home']);
      } else {
        this.store.dispatch(AuthActions.login({ username: this.username, password: this.password }));

        const loginSuccess = await this.authService.login(this.username, this.password);

        if (loginSuccess) {
          this.router.navigate(['/home']);
        } else {
          this.showAlert('Error', 'Inicio de sesión fallido. Verifica tus credenciales.');
        }
      }
    } catch (error) {
      console.error('Ha ocurrido un error:', error);
      this.showAlert('Error', 'Ha ocurrido un error. Por favor, inténtalo de nuevo.');
    }
  }

  goToRegistrationPage() {
    this.router.navigate(['/registration']);
  }

  goToHomePage() {
    this.router.navigate(['/home']);
  }

  async forgotPassword() {
    const alert = await this.alertController.create({
      header: 'Recuperar Contraseña',
      message: 'Se enviarán instrucciones para restablecer tu contraseña a tu correo electrónico.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // Manejar el botón "Cancelar" si es necesario
          },
        },
        {
          text: 'Enviar',
          handler: () => {
            // Agregar lógica para enviar un correo con instrucciones para restablecer la contraseña
          },
        },
      ],
    });

    await alert.present();
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
