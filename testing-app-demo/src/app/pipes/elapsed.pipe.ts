import { Inject, Pipe, PipeTransform } from "@angular/core";
import moment from "moment";

@Pipe({
    name : 'elapsed'
})
export class ElapsedPipe implements PipeTransform{
    constructor(@Inject('MOMENT') private moment : any) {

    }
    transform(value: any, ...args: any[]) {
        console.log('elapsedPipe.transform triggered')
        return this.moment(value).fromNow();
    }

}