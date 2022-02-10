import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { DoctorComponent } from './doctor.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'findAll', component: DoctorComponent},
      {path: ':idDoctor', component: DoctorFormComponent},
      {path: '', component: DoctorFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
