import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { PatientService } from './patient/patient.service';

describe('PatientService', () => {
  let service: PatientService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('httpClient', ['get', 'post', 'put']);
    service = new PatientService(httpClientSpy as any);
  });

  it('Should return expected patients (HttpClient called once)', () => {
    const expectedPatients = [
      {
        "idPatient": "5",
        "name": "Luz Dary Paez",
        "dateOfBirth": "1979-11-26",
        "idType": "CC",
        "eps": "Medimas",
        "clinicHistory": "Sufre de rinitis"
      },
      {
        "idPatient": "1",
        "name": "Gloria Obando",
        "dateOfBirth": "1975-10-14",
        "idType": "CC",
        "eps": "Coomeva",
        "clinicHistory": "Padece de Neumonía"
      },
      {
        "idPatient": "2",
        "name": "Luis Perales",
        "dateOfBirth": "2014-05-13",
        "idType": "TI",
        "eps": "Nueva EPS",
        "clinicHistory": "Padecimiento renal"
      },
      {
        "idPatient": "4",
        "name": "Blanca Vargas",
        "dateOfBirth": "1990-11-22",
        "idType": "CC",
        "eps": "Medimas",
        "clinicHistory": "Padece de lupus"
      },
      {
        "idPatient": "3",
        "name": "Samuel Granobles",
        "dateOfBirth": "2011-08-27",
        "idType": "TI",
        "eps": "Medimas",
        "clinicHistory": "Todo OK"
      }
    ];

    httpClientSpy.get.and.returnValue(of(expectedPatients));
    service.getAll();

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
