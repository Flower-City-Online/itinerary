import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { ModalService } from '../../services/core/modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './itineraries.component.html',
  styleUrl: './itineraries.component.css'
})
export class ItinerariesComponent {
  constructor(public router:Router,public modalService:ModalService) {
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
