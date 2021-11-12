// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }



import { HotelsService } from './../hotels.service';
import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from '../product-details.service';
// import { CounterService } from '../counter.service';
import { AddtocartService } from '../addtocart.service';
import { observeOn } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public productList:any;
  public constructor(public hotelServiceObject:HotelsService,public product:ProductDetailsService,public cartservice:AddtocartService) {}
    ngOnInit(): void {
      this.hotelServiceObject.getHotels().subscribe((res)=>{
      this.productList=res;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addtocart(item:any){
    this.cartservice.addtocart(item);
  }
  view(item:any){
    this.product.view(item);
  }
}
