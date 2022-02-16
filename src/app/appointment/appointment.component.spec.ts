import { Appointment } from "./Appointment";
import { AppointmentService } from "./appointment.service";

let httpClientSpy: { post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy, get: jasmine.Spy };
let appointmentService: AppointmentService;

describe('AppointmentComponent', () => {

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'put', 'delete', 'get']);
        appointmentService = new AppointmentService(httpClientSpy as any);
    });

    it('should return expected appointment to POST (HttpClient called once)', () => {
        const expectedAppointment: Appointment = {
            "idAppointment": 46,
            "doctor": "101",
            "patient": "2",
            "date": "2022-02-18",
            "hour": 9
        };

        httpClientSpy.post.and.returnValue(expectAsync(expectedAppointment));
        appointmentService.create(expectedAppointment)
        expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
    });

    it('should return expected appointment to PUT (HttpClient called once)', () => {
        const expectedAppointment: Appointment = {
            "idAppointment": 46,
            "doctor": "101",
            "patient": "2",
            "date": "2022-02-23",
            "hour": 10
        };

        httpClientSpy.put.and.returnValue(expectAsync(expectedAppointment));
        appointmentService.update(expectedAppointment)
        expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
    });

    it('should return expected appointment to DELETE (HttpClient called once)', () => {
        const idToDelete = 46;

        httpClientSpy.delete.and.returnValue(expectAsync(idToDelete));
        appointmentService.delete(idToDelete);
        expect(httpClientSpy.delete.calls.count()).toBe(1, 'one call');
    });

    it('should return expected appointment to GET (HttpClient called once)', () => {
        const idToGet = 2;

        httpClientSpy.delete.and.returnValue(expectAsync(idToGet));
        appointmentService.get(idToGet);
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
});