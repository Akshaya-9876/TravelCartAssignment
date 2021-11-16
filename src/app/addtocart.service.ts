import { analyzeAndValidateNgModules, isNgTemplate, ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);
  public amnt:any;
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtocart(product:any){
    const exist = this.cartItemList.find((item:any)=>{
      return item.id === product.id;
    })
    if(exist) {
      exist.quantity++;
      this.total();
    }
    else {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.total();
      console.log(this.cartItemList);
    }
    this.getTotalPrice();
  }
  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=  this.amnt;
      console.log(this.amnt);
    })
    return grandTotal;
  }
  total(){
    let totalprice=0;
    this.cartItemList.map((a:any)=>{
      totalprice= a.quantity * a.price;
    })
    this.amnt = totalprice;
    return totalprice;
  }
  removecartitem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeallcart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
}

