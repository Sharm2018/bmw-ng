import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CamelizePipe } from 'ngx-pipes';

@Injectable()
export class MapService {
    private geoCoder;
    private locationCache: any = {};

    constructor(private camelizePipe: CamelizePipe) {}

    private camelize(value: string): string {
        return this.camelizePipe.transform(value);
    }

    private cacheLocation(location: string, coordinates: any) {
        this.locationCache[this.camelize(location)] = coordinates;
    }

    private isLocationCache(location: string): boolean {
        return this.locationCache[this.camelize(location)];
    }

    private geoCodeLocation(location: string): Observable<any> {
        if(!this.geoCoder) {
            this.geoCoder = new (<any>window).google.maps.Geocoder();
        }
        return new Observable((observer) => {
            this.geoCoder.geocode({address: location}, (result, status) => {
                // tslint:disable-next-line:no-debugger
                debugger;
                if (status === 'OK') {
                    const geometry = result[0].geometry.location;
                    // tslint:disable-next-line:no-debugger
                    debugger;
                    const corordinates = {lat: geometry.lat(), lng: geometry.lng()};
                    this.cacheLocation(location, corordinates);
                    observer.next({lat: geometry.lat(), lng: geometry.lng()});
                } else {
                    observer.error('Location could not be geocoded');
                }
            });
        });
    }

    public getGeoLocation(location: string): Observable<any> {
        if (this.isLocationCache(location)) {
            Observable.of(this.locationCache[this.camelize(location)]);
        } else {
            return this.geoCodeLocation(location);
        }
    }
}
