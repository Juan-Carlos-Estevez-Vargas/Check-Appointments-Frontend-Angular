import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientFormComponent } from './patient/patient-form.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorFormComponent } from './doctor/doctor-form/doctor-form.component';

const routes:Routes=[
  {path:'', redirectTo:'', pathMatch:'full'},
  {path:'patient/findAll', component:PatientComponent},
  {path:'doctor/findAll', component:DoctorComponent},
  {path:'patient', component:PatientFormComponent},
  {path:'doctor', component:DoctorFormComponent},
  {path:'patient/:idPatient', component:PatientFormComponent},
  {path:'doctor/:idDoctor', component:DoctorFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientFormComponent,
    DoctorComponent,
    DoctorFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
