import { Component, OnInit } from '@angular/core';
import { Patient } from './Patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  title:string = "Patient's List";
  patients:Patient[] = [];

  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
    
    // Lista de pacientes
    this.patientService.getAll().subscribe(
      e => this.patients = e
    );
  }

}
