import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-route-type-footer',
  templateUrl: './route-type-footer.component.html',
  styleUrl: './route-type-footer.component.scss',
})
export class RouteTypeFooterComponent {
  @Output() routeTypeSelected = new EventEmitter<void>();
  routeTypes: string[] = ['City scenic', 'Nature scenic'];
  moreRouteTypes: string[] = [
    'Contains historic places',
    'Avoid traffic',
    'Route modifier placeholder',
  ];

  selectedChips: number[] = [];
  selectedMoreChips: number[] = [];

  toggleChipSelection(index: number): void {
    const chipIndex = this.selectedChips.indexOf(index);
    if (chipIndex > -1) {
      this.selectedChips.splice(chipIndex, 1);
    } else {
      this.selectedChips.push(index);
    }
  }

  toggleMoreChipSelection(index: number): void {
    const chipIndex = this.selectedMoreChips.indexOf(index);
    if (chipIndex > -1) {
      this.selectedMoreChips.splice(chipIndex, 1);
    } else {
      this.selectedMoreChips.push(index);
    }
  }

  handleContinueClick(): void {
    this.routeTypeSelected.emit();
  }
}
