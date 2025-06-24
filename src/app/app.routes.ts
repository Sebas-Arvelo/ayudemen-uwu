
import { Routes } from '@angular/router';
import { AboutUsPageComponents } from './pages/about-us/about-us-page';
import { DuelComponent } from './pages/duel/duel.component';
import { LoginComponent } from './pages/login/login.component';
import { PaymentComponent } from './pages/payment/payment.component';


export const routes: Routes = [
  {
    path: '',
    component: AboutUsPageComponents
  },
  {
    path: 'duel',
    component: DuelComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
  },
];


