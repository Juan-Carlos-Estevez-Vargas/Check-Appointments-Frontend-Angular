import { Patient } from './Patient';
import { PatientService } from './patient.service';

let httpClientSpy: { post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy, get: jasmine.Spy };
let patientService: PatientService;

describe('PatientComponent', () => {

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'put', 'delete', 'get']);
    patientService = new PatientService(httpClientSpy as any);
  });

  it('should return expected patient to POST (HttpClient called once)', () => {
    const expectedPatient: Patient = {
      "idPatient": "3030100",
      "name": "Mauricio Morales",
      "dateOfBirth": "2000-10-11",
      "idType": "CC",
      "eps": "EPS Test",
      "clinicHistory": "OK"
    };

    httpClientSpy.post.and.returnValue(expectAsync(expectedPatient));
    patientService.create(expectedPatient)
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });

  it('should return expected patient to PUT (HttpClient called once)', () => {
    const expectedPatient: Patient = {
      "idPatient": "3030100",
      "name": "Mauricio Morales",
      "dateOfBirth": "2000-10-13",
      "idType": "CC",
      "eps": "EPS Test e",
      "clinicHistory": "OK"
    };

    httpClientSpy.put.and.returnValue(expectAsync(expectedPatient));
    patientService.update(expectedPatient)
    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
  });

  it('should return expected patient to DELETE (HttpClient called once)', () => {
    const idToDelete = "123";

    httpClientSpy.delete.and.returnValue(expectAsync(idToDelete));
    patientService.delete(idToDelete);
    expect(httpClientSpy.delete.calls.count()).toBe(1, 'one call');
  });

  it('should return expected patient to GET (HttpClient called once)', () => {
    const idToGet = "123";

    httpClientSpy.delete.and.returnValue(expectAsync(idToGet));
    patientService.get(idToGet);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});