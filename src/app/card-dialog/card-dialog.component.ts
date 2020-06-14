import { Component, OnInit } from '@angular/core';
import {HotelList} from '../model/hotel-list';
import {UserList} from '../model/user-list';
import {LocalStorageServiceService } from '../services/local-storage-service.service';
import { AdminServiceService } from '../services/admin-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {

  public users : UserList[] ;
  constructor(
    private localStorageHotels : LocalStorageServiceService,
    private adminService : AdminServiceService,
    private router : Router
    ) { }

  ngOnInit() {
    this.users = this.localStorageHotels.getItem("userList");
    console.log(this.users);
  }
  
    deleteUserDetails(emailId){
      this.adminService.deleteUserDetails(emailId).subscribe();
      window.location.reload();
      this.adminService.getAllUsers().subscribe((data) => {
        this.localStorageHotels.removeItem("userList");
        this.localStorageHotels.setItem("userList",data);
        console.log(this.localStorageHotels.getItem("userList"));
        this.router.navigate(['/admin/usersList']);
      })
    }

    updateUserDetails(user){
      this.adminService.updateUserDetails(user).subscribe((data) => {
        console.log(data);
        this.localStorageHotels.removeItem("userList");
      });
      window.location.reload();
      this.adminService.getAllUsers().subscribe((data) => {
        this.localStorageHotels.setItem("userList",data);
        console.log(this.localStorageHotels.getItem("userList"));
        this.router.navigate(['/admin/usersList']);
      })
    }

 
}
