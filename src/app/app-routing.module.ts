import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HotelComponent } from './hotel/hotel.component';
import { HomeComponent } from './home/home.component';
import { AddcartComponent } from './addcart/addcart.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'hotel/:hotelid',component:HotelComponent},
  {path:'addcart',component:AddcartComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

