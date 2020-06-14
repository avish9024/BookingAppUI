import { Component, OnInit } from '@angular/core';
import {HotelList} from '../model/hotel-list';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {LocalStorageServiceService} from '../services/local-storage-service.service';
import {AdminServiceService} from '../services/admin-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {
  updateHotel : FormGroup;
  public Hotels: HotelList[];
  constructor(
    public adminService : AdminServiceService,
    private formBuilder : FormBuilder,
    private localStorageHotels : LocalStorageServiceService,
    private router : Router
  ) { }

  ngOnInit() {
    this.Hotels = this.localStorageHotels.getItem("hotelsList");
    console.log(this.Hotels);
  }
  

  updateHotelDetails(filter){
    this.adminService.updateUserDetails(filter).subscribe((data) => {
      console.log(data);
    });
    this.adminService.getAllUsers().subscribe((data) => {
      this.localStorageHotels.removeItem("userList");
      this.localStorageHotels.setItem("userList",data);
      console.log(this.localStorageHotels.getItem("userList"));
      this.router.navigate(['/admin/usersList']);
    })
  }
  deleteHotelDetails(hotel){
    this.adminService.deleteUserDetails(hotel).subscribe();
    this.adminService.getAllUsers().subscribe((data) => {
      this.localStorageHotels.removeItem("userList");
      this.localStorageHotels.setItem("userList",data);
      console.log(this.localStorageHotels.getItem("userList"));
      this.router.navigate(['/admin/usersList']);
    })
  }

}
