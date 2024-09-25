import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  constructor() {}

  getCurrentLocation(): Promise<{ lat: number; long: number }> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            });
          },
          (error) => {
            reject(`Geolocation error: ${error.message}`);
          }
        );
      } else {
        reject("Geolocation is not supported by this browser.");
      }
    });
  }
}
