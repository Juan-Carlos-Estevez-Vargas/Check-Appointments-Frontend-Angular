import { of } from 'rxjs';
import { AppointmentService } from './appointment.service';

describe('AppointmentService', () => {
  let service: AppointmentService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('httpClient', ['get']);
    service = new AppointmentService(httpClientSpy as any);
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(AppointmentService);
  });

  it('Should return expected appointments (HttpClient called once)', () => {
    const expectedAppointments = [
      {
        "idAppointment": 0,
        "doctor": "101",
        "patient": "2",
        "date": "2022-02-18",
        "hour": 9
      },
      {
        "idAppointment": 2,
        "doctor": "103",
        "patient": "4",
        "date": "2022-03-12",
        "hour": 10
      }
    ];

    httpClientSpy.get.and.returnValue(of(expectedAppointments));
    service.getAll();

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
