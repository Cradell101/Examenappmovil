import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then((m) => m.RegistrationPageModule),
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then((m) => m.WelcomePageModule),
    // No es necesario canActivate en la página de bienvenida si quieres permitir el acceso sin autenticación
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then((m) => m.ErrorPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'new-trip',
    loadChildren: () => import('./new-trip/new-trip.module').then( m => m.NewTripPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
