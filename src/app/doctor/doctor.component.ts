import { Component, OnInit } from '@angular/core';
import { Doctor } from './Doctor';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: [/*'./doctor.component.css'*/]
})
export class DoctorComponent implements OnInit {
  title = "Doctor's List";
  doctors:Doctor[] = [];
  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    // Lista de médicos
    this.doctorService.getAll().subscribe(
      doctor => this.doctors = doctor
    );
  }

  delete(doctor:Doctor):void {
    this.doctorService.delete(doctor.idDoctor).subscribe(
      response => {
        if (response != null) {
          this.doctorService.getAll().subscribe(
            res => this.doctors = res
          )
        }
      }
    );
  }

}