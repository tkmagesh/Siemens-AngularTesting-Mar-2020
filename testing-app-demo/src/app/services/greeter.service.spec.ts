import { GreeterService } from "./greeter.service"
import { TimerService } from "./timer.service"
import { TestBed } from "@angular/core/testing";

describe("Greeter Service", () => {
    it ("should interact with the timer service when greeted and return 'Have a nice day!", () => {
        //Arrange
            /* const timerSpy = jasmine.createSpyObj("TimerService", {
                getCurrent : new Date('31-Mar-2021 9:00:00')
            }); */
            const timerSpy = jasmine.createSpyObj("TimerService", ["getCurrent"]);
            timerSpy.getCurrent.and.returnValue(new Date('31-Mar-2021 9:00:00'))
            
            TestBed.configureTestingModule({
                providers : [
                    GreeterService,
                    { provide : TimerService, useValue : timerSpy}
                ]
            })
            
            const greeterService = TestBed.inject(GreeterService);
            const expectedResult = "Hi Magesh, Have a nice day!";

        //Act
            const result = greeterService.greet("Magesh");

        //Assert
            expect(timerSpy.getCurrent).toHaveBeenCalledTimes(1);
            expect(result).toBe(expectedResult);

         
            
    })

    it ("should interact with the timer service when greeted and return 'Good Evening!", () => {
        //Arrange
            const timerSpy = jasmine.createSpyObj("TimerService", {
                getCurrent : new Date('31-Mar-2021 18:00:00')
            });
             TestBed.configureTestingModule({
                providers : [
                    GreeterService,
                    { provide : TimerService, useValue : timerSpy}
                ]
            })
            
            const greeterService = TestBed.inject(GreeterService);
            const expectedResult = "Hi Magesh, Good Evening!";

        //Act
            const result = greeterService.greet("Magesh");

        //Assert
            expect(timerSpy.getCurrent).toHaveBeenCalledTimes(1);
            expect(result).toBe(expectedResult);
    })
})

/* describe("Greeter Service", () => {
    it ("should interact with the timer service when greeted and return 'Have a nice day!", () => {
        //Arrange
            const timerSpy = jasmine.createSpyObj("TimerService", {
                getCurrent : new Date('31-Mar-2021 9:00:00')
            });
            const greeterService = new GreeterService(timerSpy);
            const expectedResult = "Hi Magesh, Have a nice day!";

        //Act
            const result = greeterService.greet("Magesh");

        //Assert
            expect(timerSpy.getCurrent).toHaveBeenCalledTimes(1);
            expect(result).toBe(expectedResult);
    })

    it ("should interact with the timer service when greeted and return 'Good Evening!", () => {
        //Arrange
            const timerSpy = jasmine.createSpyObj("TimerService", {
                getCurrent : new Date('31-Mar-2021 18:00:00')
            });
            const greeterService = new GreeterService(timerSpy);
            const expectedResult = "Hi Magesh, Good Evening!";

        //Act
            const result = greeterService.greet("Magesh");

        //Assert
            expect(timerSpy.getCurrent).toHaveBeenCalledTimes(1);
            expect(result).toBe(expectedResult);
    })
}) */

/* class FakeMorningTimerService{
    getCurrent(){
        return new Date('10-Mar-2021 9:00:00')
    }
}

class FakeEveningTimerService{
    getCurrent(){
        return new Date('10-Mar-2021 18:00:00')
    }
}

describe("Greeter Service", () => {
    it("should generate 'Have a nice day' when greeted between 3 & 16 Hours", () => {
        //Arrange
        const timerServiceForMorning = new FakeMorningTimerService(),
            greeterService = new GreeterService(timerServiceForMorning),
            expectedResult = 'Hi Magesh, Have a nice day!';

        //Act
        const result = greeterService.greet("Magesh");

        //Assert
        expect(result).toBe(expectedResult);
    })

    it("should generate 'Good Evening' when greeted after 16 Hours", () => {
        //Arrange
        const timerServiceForEvening = new FakeEveningTimerService(),
            greeterService = new GreeterService(timerServiceForEvening),
            expectedResult = 'Hi Magesh, Good Evening!';

        //Act
        const result = greeterService.greet("Magesh");

        //Assert
        expect(result).toBe(expectedResult);
    })
}) */