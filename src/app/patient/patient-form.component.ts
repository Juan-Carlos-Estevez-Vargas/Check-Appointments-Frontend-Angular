import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from './Patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  patient:Patient = new Patient();
  title:string = "Add Patient";

  constructor(private patientService:PatientService, private router:Router) { }

  ngOnInit(): void {
  }

  create():void {
    console.log(this.patient);
    this.patientService.create(this.patient).subscribe(
      res => this.router.navigate(['/patient/findAll'])
    );
  }

}
