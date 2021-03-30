import { BugApiService } from './bugApi.service'
import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Bug } from '../models/bug'
import bugMockData from '../mockdata/bugs';

describe('Bug Api Service', () => {

    let bugApiService: BugApiService;
    let httpTestingController: HttpTestingController;

    beforeEach(() =>{
        TestBed.configureTestingModule({
            providers: [
                BugApiService
            ],
            imports : [
                HttpClientTestingModule
            ]
        });

        bugApiService = TestBed.inject(BugApiService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() =>{
         httpTestingController.verify();
    })

    it("Should return all the bugs", () => {
        bugApiService.getAll()
            .subscribe(bugs => {
                expect(bugs).toBeTruthy('No bugs returned');
                expect(bugs.length).toBe(2);
                const bug = bugs.find(bug => bug.id === 3);
                expect(bug).toBeDefined()
                expect(bug?.name).toBe('Data integrity checks failed')

            });
        const req = httpTestingController.expectOne('http://localhost:3000/bugs');
        expect(req.request.method).toBe('GET');
        req.flush(bugMockData);
       
    })

     it("Should return bugs by id", () => {
        bugApiService.getById(3)
            .subscribe(bug => {
                expect(bug).toBeDefined()
                expect(bug?.name).toBe('Data integrity checks failed')
            });
        const req = httpTestingController.expectOne('http://localhost:3000/bugs/3');
        expect(req.request.method).toBe('GET');
        req.flush(bugMockData.find(bug => bug.id == 3) || {});
        httpTestingController.verify()
    })
})