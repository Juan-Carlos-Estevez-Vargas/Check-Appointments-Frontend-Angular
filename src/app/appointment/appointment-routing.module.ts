import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentComponent } from './appointment.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'findAll', component: AppointmentComponent},
      {path: ':idAppointment', component: AppointmentFormComponent},
      {path: '', component: AppointmentFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
