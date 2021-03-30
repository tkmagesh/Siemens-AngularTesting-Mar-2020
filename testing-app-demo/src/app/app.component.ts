import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testing-app-demo';
  //products = 
  products : any;
  newProductName : string = '';

  constructor (private productsService : ProductsService){

  }
  ngOnInit(){
    this.products = this.productsService.getAll();
  }

  getElapsed(data : string) : string{
    console.log('getElapsed triggered');
    return moment(data).fromNow();
  }
}
