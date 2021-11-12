// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-hotel',
//   templateUrl: './hotel.component.html',
//   styleUrls: ['./hotel.component.scss']
// })
// export class HotelComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { HotelsService } from './../hotels.service';
 import { ActivatedRoute } from '@angular/router';
// import { ThrowStmt } from '@angular/compiler';
// import { Product } from '../products';
import { ProductDetailsService } from '../product-details.service';
import { AddtocartService } from '../addtocart.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

// import { Review } from '../review';
 @Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  list:any=[];
  public productList:any ;
  public constructor(public route:ActivatedRoute,public hotelServiceObject:HotelsService,private product:ProductDetailsService,private cartservice:AddtocartService) {}
   ngOnInit(): void {
    this.hotelServiceObject.getHotels().subscribe((res)=>{
      this.productList=res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
       });
      });
      this.list = this.product.item;
    }
    addtocart(item:any){
      this.cartservice.addtocart(item);
    }

    // name="Enter your name";
    // review="Type review here"
  }
