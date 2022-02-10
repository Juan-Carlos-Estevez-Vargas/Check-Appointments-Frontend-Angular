import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientFormComponent } from './patient-form.component';
import { PatientComponent } from './patient.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'findAll', component: PatientComponent},
      {path: ':idPatient', component: PatientFormComponent},
      {path: '', component: PatientFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
