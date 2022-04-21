import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { AboutComponent } from './components/about/about.component';
import { EquipoComponent } from './components/equipo/equipo.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'equipos', component: EquiposComponent },
  { path: 'about', component: AboutComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);



