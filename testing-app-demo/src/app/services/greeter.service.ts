import { TimerService } from "./timer.service";

export class GreeterService{
    constructor(private timerService : TimerService){

    }
    greet(name : string) : string {
        
        const currentHour = this.timerService.getCurrent().getHours();
        if (currentHour > 3 && currentHour < 16){
            return `Hi ${name}, Have a nice day!`
        } else {
            return `Hi ${name}, Good Evening!`
        }
    }
}