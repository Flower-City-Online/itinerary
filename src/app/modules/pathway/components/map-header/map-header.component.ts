import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-map-header',
  templateUrl: './map-header.component.html',
  styleUrl: './map-header.component.css'
})
export class MapHeaderComponent {
  @Input() title: string = 'Default Title';
  @Input() backLink: string = '/';
  @Input() customcss: string = 'py-1';
  @Output() onSearchClick = new EventEmitter<boolean>();

  isSearchClicked: boolean = false;

  constructor(private location: Location) {}

  ngOnInit(): void {
    console.log('HeaderComponent initialized with title:', this.title);
  }

  goBack() {
    if (this.backLink) {
      window.location.href = this.backLink;
    } else {
      this.location.back();
    }
}
}
