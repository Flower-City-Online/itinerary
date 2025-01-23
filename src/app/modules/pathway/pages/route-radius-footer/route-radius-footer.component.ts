import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-route-radius-footer',
  templateUrl: './route-radius-footer.component.html',
  styleUrl: './route-radius-footer.component.scss',
})
export class RouteRadiusFooterComponent implements OnInit {
  radiusControl = new FormControl<number | null>(1);
  @Output() radiusSelected = new EventEmitter<number | null>();

  ngOnInit(): void {
    this.radiusControl.valueChanges.subscribe();
  }

  handleContinueClick(): void {
    this.radiusSelected.emit(this.radiusControl.value);
  }
}
