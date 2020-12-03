import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { EstablishmentComponent } from './components/establishment/establishment.component';

const routes: Routes = [

  { path : '', component: AuthentificationComponent},
  { path : 'doctor', component: DoctorComponent},
  { path : 'establishment', component: EstablishmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
