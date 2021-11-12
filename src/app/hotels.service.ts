// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HotelsService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Product,products } from './products';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  get<T>(arg0: string) {
    throw new Error('Method not implemented.');
  }
  subscribe: any;

  public constructor(public http: HttpClient) {
  }
    getHotels(){
      //return this.http.get("http://jsonplaceholder.typicode.com/users");
      //  return this.http.get<{id: string,name: string,details: string, price: number,starRating: number,location: string,}[]>('./assets/hotels.json');
      return this.http.get<any>('./assets/json/hotels.json').pipe(map((res:any)=>{
        return res;
      }));
    
      }
} 

