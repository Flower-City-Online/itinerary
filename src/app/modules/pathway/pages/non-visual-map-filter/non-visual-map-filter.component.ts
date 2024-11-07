import { Component, ViewChild } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { GooglemapdemoComponent } from '../../components/googlemapdemo/googlemapdemo.component';
@Component({
  selector: 'app-non-visual-map-filter',
  templateUrl: './non-visual-map-filter.component.html',
  styleUrl: './non-visual-map-filter.component.css',
})
export class NonVisualMapFilterComponent {
  mapType = 'roadmap';
  locationsMarkers = [
    { lat: 37.7749, lng: -122.4194, label: 'San Francisco' },
    { lat: 34.0522, lng: -118.2437, label: 'Los Angeles' },
  ];
  initialLocation = { lat: 36.7783, lng: -119.4179 };
  ICONS = ICONS;
  @ViewChild('mapDemo') mapDemo!: GooglemapdemoComponent;

  toggleDrawingTool() {
    this.mapDemo.startDrawingPolygon();
  }
}
