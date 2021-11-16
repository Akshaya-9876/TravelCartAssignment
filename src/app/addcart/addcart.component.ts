import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../addtocart.service';
@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss']
})
export class AddcartComponent implements OnInit {
  public products:any=[];
  public grandtotal!:number;
  public total !: number;

  constructor(private cartservice:AddtocartService) { }
    ngOnInit(): void {
    this.cartservice.getProducts().subscribe(res=>{
      this.products=res;
      this.grandtotal=this.cartservice.getTotalPrice();
      this.total=this.cartservice.total();
    })
  }
  removeitem(item:any){
    this.cartservice.removecartitem(item);
    console.log(item);
  }
  emptycart(){
    this.cartservice.removeallcart();
  }
}
