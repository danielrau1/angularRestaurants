import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../models/restaurant'; // [3.1a]
import {RestaurantService} from '../models/services/restaurant.service'; // [3.1b]


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  rests: Restaurant[]; // [3.1a]



  constructor(private restaurantService: RestaurantService) { }

 // [3.1a]
  ngOnInit() {
     this.getRestaurants();
  }


  // [3.1b]
  getRestaurants(): void {
    this.restaurantService.getRestaurants2()
      .subscribe(restaurants => this.rests = restaurants);
    console.log(this.rests);
  }

}
