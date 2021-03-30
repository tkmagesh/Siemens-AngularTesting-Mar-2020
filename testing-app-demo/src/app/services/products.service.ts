import { Injectable } from "@angular/core";

@Injectable({providedIn : 'root'})
export class ProductsService{
    getAll(){
        return [
            {name : 'Pen', lastUpdated : '2020-12-11T10:39:20.648Z'},
            {name : 'Pencil', lastUpdated : '2020-11-11T10:39:20.648Z'},
            {name : 'Marker', lastUpdated : '2021-01-11T10:39:20.648Z'},
        ];
    }
}