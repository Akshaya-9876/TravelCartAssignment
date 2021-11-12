// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductDetailsService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  item:any=[];
  constructor() { }

  view(item:any){
    this.item=item;
  }
}

