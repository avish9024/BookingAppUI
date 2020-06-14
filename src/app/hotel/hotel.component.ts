import { Component, OnInit } from '@angular/core';
import {HotelList} from 'src/app/model/hotel-list';
import { LocalStorageServiceService } from '../services/local-storage-service.service';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  
  public Hotels: HotelList[] 
  constructor(
    private localStorageHotels : LocalStorageServiceService
  ) { }

  ngOnInit() {
   this.Hotels = this.localStorageHotels.getItem("hotels");
   console.log(this.Hotels);
  }
 
  
  
}
