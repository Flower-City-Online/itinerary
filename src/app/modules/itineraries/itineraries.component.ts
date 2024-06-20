import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './itineraries.component.html',
  styleUrl: './itineraries.component.css'
})
export class ItinerariesComponent {
  constructor(public router:Router) {
  }
  backButtonClick() {
    console.log('back button clicked');
    window.history.back();
  }

  searchButtonClick() {
    console.log('search button clicked');
    this.router.navigate(['/search/search']).then(r => console.log(r));
  }
}
