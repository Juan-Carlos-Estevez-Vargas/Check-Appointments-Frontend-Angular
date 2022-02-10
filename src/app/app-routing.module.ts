import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
 {
   path: 'patient',
   loadChildren: () => import('./patient/patient.module').then(module => module.PatientModule)
 },
 {
  path: 'doctor',
  loadChildren: () => import('./doctor/doctor.module').then(module => module.DoctorModule)
},
{
 path: 'appointment',
 loadChildren: () => import('./appointment/appointment.module').then(module => module.AppointmentModule)
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
