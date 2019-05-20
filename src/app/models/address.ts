export class Address {

  streetNumber: number;
  apartment: string;
  streetName: string;
  city: string;
  province: string;
  country: string;

  constructor(args?) {

    this.streetNumber = args.streetNumber;
    this.streetName = args.streetName;
    this.city = args.city;
    this.province = args.province;
    this.country = args.country;


  }

}
