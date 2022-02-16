import { of } from 'rxjs';
import { DoctorService } from './doctor.service';

describe('DoctorService', () => {
  let service: DoctorService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('httpClient', ['get']);
    service = new DoctorService(httpClientSpy as any);
  });

  it('Should return expected doctors (HttpClient called once)', () => {
    const expectedDoctors = [
      {
        "idDoctor": "101",
        "doctorsName": "Bella Poarch",
        "idType": "CC",
        "numberProfessionalCard": "1230",
        "yearsExperience": 2.0,
        "specialty": "Urología",
        "attentionStartTime": 8,
        "attentionEndTime": 15
      },
      {
        "idDoctor": "103",
        "doctorsName": "Margot Robbie",
        "idType": "CC",
        "numberProfessionalCard": "03",
        "yearsExperience": 9.0,
        "specialty": "Urología",
        "attentionStartTime": 8,
        "attentionEndTime": 17
      },
      {
        "idDoctor": "102",
        "doctorsName": "Florinda Mesa",
        "idType": "CC",
        "numberProfessionalCard": "02",
        "yearsExperience": 1.0,
        "specialty": "Cardiología",
        "attentionStartTime": 6,
        "attentionEndTime": 14
      }
    ];

    httpClientSpy.get.and.returnValue(of(expectedDoctors));
    service.getAll();

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
