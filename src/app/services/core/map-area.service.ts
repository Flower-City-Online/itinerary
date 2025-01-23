import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapAreaService {
  private continueButtonState = new BehaviorSubject<boolean>(false);
  continueButtonState$ = this.continueButtonState.asObservable();

  private selectMode = new BehaviorSubject<boolean>(false);
  selectMode$ = this.selectMode.asObservable();

  private drawMode = new BehaviorSubject<boolean>(true);
  drawMode$ = this.drawMode.asObservable();

  private clearAction = new BehaviorSubject<void>(undefined);
  clearAction$ = this.clearAction.asObservable();

  private selectedPlaces = new BehaviorSubject<
    google.maps.places.PlaceResult[]
  >([]);
  selectedPlaces$ = this.selectedPlaces.asObservable();

  private distance = new BehaviorSubject<number>(0);
  distance$ = this.distance.asObservable();

  private estimatedTime = new BehaviorSubject<string>('');
  estimatedTime$ = this.estimatedTime.asObservable();

  private hideMap = new BehaviorSubject<boolean>(false);
  hideMap$ = this.hideMap.asObservable();

  hideMapAction(): void {
    this.hideMap.next(true);
  }

  unHideMapAction(): void {
    this.hideMap.next(false);
  }

  triggerClearAction() {
    this.clearAction.next();
  }

  enableSelectMode() {
    this.selectMode.next(true);
    this.disableDrawMode();
  }

  disableSelectMode() {
    this.selectMode.next(false);
  }

  enableDrawMode() {
    this.drawMode.next(true);
    this.disableSelectMode();
  }

  disableDrawMode() {
    this.drawMode.next(false);
  }

  enableContinueButton(enable: boolean) {
    this.continueButtonState.next(enable);
  }

  updateSelectedPlaces(
    places: google.maps.places.PlaceResult[],
    distance: number,
    estimatedTime: string,
  ) {
    this.selectedPlaces.next(places);
    this.distance.next(distance);
    this.estimatedTime.next(estimatedTime);
  }

  // New method to remove a place at a specific index
  removePlace(index: number) {
    const currentPlaces = this.selectedPlaces.getValue(); // Get the current array of selected places
    if (index >= 0 && index < currentPlaces.length) {
      currentPlaces.splice(index, 1); // Remove the place at the specified index
      this.selectedPlaces.next(currentPlaces); // Update the observable
      // Recalculate distance and estimated time if needed
      this.updateDistanceAndTime(currentPlaces);
    }
  }

  private updateDistanceAndTime(places: google.maps.places.PlaceResult[]) {
    // This is where you can implement logic to recalculate distance and time
    // For simplicity, we'll set the distance and estimated time to 0 here
    this.updateSelectedPlaces(places, 0, '');
  }
}
