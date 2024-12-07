import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplainsService {

  complains = [
    {
      "carID": 1,
      "complainText": "The car I bought is not as described in the listing.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 2,
      "complainText": "The rented car had engine issues during my trip.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 3,
      "complainText": "The payment for my car has been delayed.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 4,
      "complainText": "The renter returned my car with significant scratches.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 5,
      "complainText": "I found hidden damages in the car after the purchase.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 6,
      "complainText": "The fuel level was lower than promised at the start of the rental.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 7,
      "complainText": "The platform fee charged is higher than agreed upon.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 8,
      "complainText": "The renter extended the rental period without prior approval.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 9,
      "complainText": "The car documents provided were incomplete.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 10,
      "complainText": "The car's air conditioning was not functional.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 11,
      "complainText": "The car's evaluation price was unfairly low.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 12,
      "complainText": "The renter returned the car with a missing spare tire.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 13,
      "complainText": "I received incorrect ownership transfer details.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 14,
      "complainText": "The car's tires were worn out and unsafe for long drives.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 15,
      "complainText": "The payment process is taking too long.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 16,
      "complainText": "The car's mileage has been significantly increased by the renter.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 17,
      "complainText": "The car's service history was not provided as promised.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 18,
      "complainText": "The GPS system in the rented car was malfunctioning.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 19,
      "complainText": "I have not received an update on my car listing.",
      "status": "UNADDRESSED"
    },
    {
      "carID": 20,
      "complainText": "The car was returned without cleaning, despite the agreement.",
      "status": "UNADDRESSED"
    }
  ]
  
  

  constructor() { }

  getAllComplains() {
    return this.complains;
  }
}
