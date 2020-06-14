import { Component, OnInit } from '@angular/core';
import { UserList } from '../model/user-list';
import { AdminServiceService } from '../services/admin-service.service';
import { HotelList } from '../model/hotel-list';
import {Router } from '@angular/router';
import {LocalStorageServiceService} from '../services/local-storage-service.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  public userList : UserList[];
  public hotelList : HotelList[];
  constructor(
    public adminService : AdminServiceService,
    private router: Router,
    private localStorageForHotels : LocalStorageServiceService
  ) { }

  ngOnInit() {
  }

  getUsersList(){
    this.adminService.getAllUsers().subscribe((data) => {
      this.localStorageForHotels.removeItem("userList");
      this.localStorageForHotels.setItem("userList",data);
      console.log(this.localStorageForHotels.getItem("usersList"));
      this.router.navigate(['/admin/usersList']);
    })
  }

  getHotelsList(){
    this.adminService.getAllHotels().subscribe((data) => {
      this.localStorageForHotels.removeItem("hotelsList");
      this.localStorageForHotels.setItem("hotelsList",data);
      console.log(this.localStorageForHotels.getItem("hotelsList"));
      this.router.navigate(['/admin/hotelList']);
    })
    
  }

}
