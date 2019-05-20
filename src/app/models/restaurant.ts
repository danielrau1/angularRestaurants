// [1]
import { Address } from './address';
import { Review } from './review';

export class Restaurant {

  name: string;
  website: string;
  phone: string;
  rating: number;
  avgMealPrice: number;
  reviews: Review[];
  location: Address;


  constructor(args?) {

    this.name = args.name;
    this.website = args.website;
    this.phone = args.phone;
    this.rating = args.rating;
    this.avgMealPrice = args.avgMealPrice;

    // [1]
    this.location = args.location;
    // [1]
    this.reviews = args.reviews;

  }
}
