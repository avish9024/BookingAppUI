import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HotelComponent } from './hotel/hotel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import {HotelListpageComponent} from './hotel-listpage/hotel-listpage.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'admin',
    component : AdminPanelComponent
  },
  {
    path : 'hotel',
    component : HotelComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },{
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'admin/usersList',
    component : UserListPageComponent
  },
  {
    path : 'admin/hotelList',
    component : HotelListpageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
