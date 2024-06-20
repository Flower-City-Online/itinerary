import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-itinerary-modal-item',
  templateUrl: './create-itinerary-modal-item.component.html',
  styleUrl: './create-itinerary-modal-item.component.css'
})
export class CreateItineraryModalItemComponent implements OnInit{
  @Output() clickEvent = new EventEmitter<any>();
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() shortTitle!: boolean;
  titleList:string[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.titleList = !this.shortTitle ? this.title.split(',') : [this.title];
    console.log(this.titleList)
    console.log(this.shortTitle)
  }

  clickEventEmitter(){
    this.clickEvent.emit();
  }
}
