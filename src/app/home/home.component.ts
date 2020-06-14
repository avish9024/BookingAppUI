import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HotelFilter } from 'src/app/model/hotel-filter';
import { FindHotelService } from 'src/app/services/find-hotel.service';
import {LoginService} from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { LocalStorageServiceService } from '../services/local-storage-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hotelForm : FormGroup;
  public hotelFilter : HotelFilter = new HotelFilter();
  constructor(
    private formBuilder : FormBuilder,
    public hotelService : FindHotelService,
    private router: Router,

    private localStorageForHotels : LocalStorageServiceService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm = () => {
    this.hotelForm = this.formBuilder.group({
      facilities : [''] ,
       locations: '',
       rooms : '',
       star : '',
       person : ''
    });
  }

  public findHotels(filter) {
    this.hotelFilter.city = filter.locations;
    this.hotelFilter.ac = filter.facilities.indexOf("1") === -1 ? false : true;
    this.hotelFilter.noOfRoomsAvailable = filter.rooms;
    this.hotelFilter.noOfStars = filter.star;
    this.hotelFilter.noOfPersons = filter.person;
    this.hotelFilter.mealsIncluded = filter.facilities.indexOf("4") === -1 ? false : true;
    this.hotelFilter.restaurantAvailable = filter.facilities.indexOf("3") === -1 ? false : true;
    this.hotelFilter.wifiFacility = filter.facilities.indexOf("2") === -1 ? false : true;
    this.hotelFilter.costOfStay=857;
    this.hotelFilter.availability = filter.facilities.indexOf("5") === -1 ? false : true;
    console.log(this.hotelFilter);

    this.hotelService.getHotels(this.hotelFilter).subscribe((data) => {
      this.localStorageForHotels.removeItem("hotels");
      this.localStorageForHotels.setItem("hotels",data);
      this.router.navigate(['/hotel']);
    })
  }

}
