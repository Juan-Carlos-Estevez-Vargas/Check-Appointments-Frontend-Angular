import { Patient } from './Patient';
import { PatientService } from './patient.service';

let httpClientSpy: { post: jasmine.Spy };
let patientService: PatientService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
  patientService = new PatientService(httpClientSpy as any);
});

it('should return expected heroes (HttpClient called once)', () => {
  const expectedPatient: Patient = {
    "idPatient": "3030100",
    "name": "Mauricio Morales",
    "dateOfBirth": "2000-10-11",
    "idType": "CC",
    "eps": "EPS Test",
    "clinicHistory": "OK"
  };

  httpClientSpy.post.and.returnValue(expectAsync(expectedPatient));
  //  httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));
  patientService.create(expectedPatient).subscribe(
    patient => expect(patient).toEqual(expectedPatient, 'expected patient'),
    fail
  );
  expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
});



/*
describe('PatientComponent', () => {
  let component: PatientComponent;
  let fixture: ComponentFixture<PatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/