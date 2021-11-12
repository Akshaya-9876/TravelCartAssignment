// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }




import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../addtocart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  list:any=[];
  public totalitem : any = "No items in cart";
  constructor(private cartservice:AddtocartService) { }
  ngOnInit(): void {
    this.cartservice.getProducts().subscribe(res=>{
      if(res.length==0){
        this.totalitem="No items in cart";
      }else{
        this.totalitem=res.length;
      }
    })
  }
}

  

