import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientFormComponent } from './patient/patient-form.component';

const routes:Routes=[
  {path:'', redirectTo:'/patient/findAll', pathMatch:'full'},
  {path:'patient/findAll', component:PatientComponent},
  {path:'patient', component:PatientFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
