import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RentalService {

    constructor(private http: HttpClient) { }
    // private rentals: any[] = [
    //     {
    //       id: '1',
    //       title : 'Central Apartment',
    //       city: 'New York',
    //       street: 'Times Square',
    //       category: 'Apartment',
    //       image: 'http://via.placeholder.com/350x250',
    //       bedrooms: 3,
    //       description: 'Very nice apartment',
    //       dailyRate: 34,
    //       shared: false,
    //       createdAt: '24/12/2017'
    //     },
    //     {
    //       id: '2',
    //       title : 'Central Apartment 2',
    //       city: 'New Jersey',
    //       street: 'Times Square',
    //       category: 'Apartment',
    //       image: 'http://via.placeholder.com/350x250',
    //       bedrooms: 3,
    //       description: 'Very nice apartment',
    //       dailyRate: 34,
    //       shared: false,
    //       createdAt: '24/12/2017'
    //     },
    //     {
    //       id: '3"',
    //       title : 'Central Apartment 3',
    //       city: 'Alabama',
    //       street: 'Times Square',
    //       category: 'Apartment',
    //       image: 'http://via.placeholder.com/350x250',
    //       bedrooms: 3,
    //       description: 'Very nice apartment',
    //       dailyRate: 34,
    //       shared: false,
    //       createdAt: '24/12/2017'
    //     },
    //     {
    //       id: '4',
    //       title : 'Central Apartment 4',
    //       city: 'Florida',
    //       street: 'Times Square',
    //       category: 'Apartment',
    //       image: 'http://via.placeholder.com/350x250',
    //       bedrooms: 3,
    //       description: 'Very nice apartment',
    //       dailyRate: 34,
    //       shared: false,
    //       createdAt: '24/12/2017'
    //     }
    //   ];

      public getRentalById(rentalId: string): Observable<Rental> {
            // return new Observable<Rental>((observer) => {
            //     setTimeout(() => {
            //         const foundRental = this.rentals.find((rental) => {
            //             return rental.id === rentalId;
            //         });
            //         observer.next(foundRental);
            //     }, 500);
            // });
            return <Observable<Rental>>this.http.get('/api/v1/rentals/' + rentalId);
      }

      public getRentals(): Observable<any> {
        //   return new Observable<Rental[]>((observer) => {
        //       setTimeout(() => {
        //           observer.next(this.rentals);
        //         }, 1000);
        //   });
        return this.http.get('/api/v1/rentals');
     }
}
