import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Bug } from './models/bug';
import { BugApiService } from './services/bugApi.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testing-app-demo';
  //products = 
  bugs : Bug[] = []
  newProductName : string = '';

  constructor (private bugApiService : BugApiService){

  }
  ngOnInit(){
    this.bugApiService
      .getAll()
      .subscribe(bugs => this.bugs = bugs)
  }

  getElapsed(data : string) : string{
    console.log('getElapsed triggered');
    return moment(data).fromNow();
  }
}
