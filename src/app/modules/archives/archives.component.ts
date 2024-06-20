import { Component } from '@angular/core';
import {ModalService} from "../../services/core/modal/modal.service";
import {DeleteItinerariesComponent} from "../itineraries/components/delete-itineraries/delete-itineraries.component";

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrl: './archives.component.css'
})
export class ArchivesComponent {
  cssClass = ['deleteItineraries']
  constructor(public modalService: ModalService) {

  }
  backButton(){
    window.history.back();
  }
}
