import { Component, OnInit } from '@angular/core';
import { Patient } from './Patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: [/*'./patient.component.css'*/]
})
export class PatientComponent implements OnInit {
  title = "Patients List";
  patients:Patient[] = [];

  constructor(private patientService:PatientService) { }

  ngOnInit(): void {  
    // Lista de pacientes
    this.patientService.getAll().subscribe(
      patient => this.patients = patient
    );
  }

  totalPatients():number {
    return this.patients.length;
  }

  delete(patient:Patient):void {
    this.patientService.delete(patient.idPatient).subscribe(
      response => {
        if (response != null) {
          this.patientService.getAll().subscribe(
            res => this.patients = res
          )
        }
      }
    );
  }

}
