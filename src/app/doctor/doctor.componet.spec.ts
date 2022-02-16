import { Doctor } from './Doctor';
import { DoctorService } from './doctor.service';

let httpClientSpy: { post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy, get: jasmine.Spy };
let doctorService: DoctorService;

describe('DoctorComponent', () => {

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'put', 'delete', 'get']);
        doctorService = new DoctorService(httpClientSpy as any);
    });

    it('should return expected doctor to POST (HttpClient called once)', () => {
        const expectedDoctor: Doctor = {
            "idDoctor": "101",
            "doctorsName": "Bella Poarch",
            "idType": "CC",
            "numberProfessionalCard": "1230",
            "yearsExperience": 2.0,
            "specialty": "Urología",
            "attentionStartTime": 8,
            "attentionEndTime": 15
        };

        httpClientSpy.post.and.returnValue(expectAsync(expectedDoctor));
        doctorService.create(expectedDoctor)
        expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
    });

    it('should return expected doctor to PUT (HttpClient called once)', () => {
        const expectedDoctor: Doctor = {
            "idDoctor": "103",
            "doctorsName": "Margot Robbie 3",
            "idType": "CC",
            "numberProfessionalCard": "03",
            "yearsExperience": 9.0,
            "specialty": "Urología 55",
            "attentionStartTime": 8,
            "attentionEndTime": 17
        };

        httpClientSpy.put.and.returnValue(expectAsync(expectedDoctor));
        doctorService.update(expectedDoctor)
        expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
    });

    it('should return expected doctor to DELETE (HttpClient called once)', () => {
        const idToDelete = "103";

        httpClientSpy.delete.and.returnValue(expectAsync(idToDelete));
        doctorService.delete(idToDelete);
        expect(httpClientSpy.delete.calls.count()).toBe(1, 'one call');
    });

    it('should return expected patient to GET (HttpClient called once)', () => {
        const idToGet = "123";

        httpClientSpy.delete.and.returnValue(expectAsync(idToGet));
        doctorService.get(idToGet);
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
});