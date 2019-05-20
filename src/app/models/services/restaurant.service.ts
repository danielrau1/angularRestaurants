import { Injectable } from '@angular/core';

// [2.1a]
import { Restaurant} from '../restaurant';
import {Address} from '../address';
import {Review} from '../review';

import {Observable, of} from 'rxjs'; // [3.1c]

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants: Restaurant[]; // [2.1a]

  constructor() {


    this.restaurants = [
      // [2.1b]
      new Restaurant({
        name : 'Pizza Pita',
        website : 'http://www.pizzapita.com',
        phone : '(514)-731-7482',
        rating : 5,
        avgMealPrice : 3,
        // [2.1c]
        location: new Address({
          streetNumber : '7489',
          streetName : 'Decarie blvd',
          apartment : '',
          city : 'Montreal',
          province : '',
          country : 'Canada'
        }),
        // [2.1c]
        reviews : [
          new Review ({author: 3, body: 'i like 3'}),
          new Review ({author: 33, body: 'i like 33'})
        ]





      }),

      new Restaurant({
        name : 'Tav Cafe',
        website : '',
        phone : '(718)-854-45122',
        rating : 6,
        avgMealPrice : 3,
        location: new Address({
          streetNumber : '5748',
          streetName : 'Decarie Blvd',
          apartment : '',
          city : '',
          province : 'QC',
          country : 'Canada'
        }),
        reviews : [ new Review ({
          author: 1,
          body: 'liked it 1'
        })]
      }),

      new Restaurant({
        name : 'Chez Benny',
        website : 'https://www.benny-co.com/',
        phone : '(514)-731-7482',
        rating : 2,
        avgMealPrice : 3,
        location: new Address({
          streetNumber : '5071 Queen Mary Rd',
          streetName : 'Queen Mary Rd',
          apartment : '',
          city : 'Montreal',
          province : 'QC',
          country : 'Canada'
        }),
        reviews : [ new Review ({author: 2, body: 'liked it 2'}),
          new Review({author: '41', body: 'didnt lime it'}),
          new Review({author: '141', body: 'random message'}),
        ]
      }),

    ];



  }

  // [3.1c]
  getRestaurants2(): Observable<Restaurant[]> {
    return of(this.restaurants);
  }



}
