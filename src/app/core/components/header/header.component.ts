import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() heading!: string;
  @Output() firstButton = new EventEmitter<any>();
  @Output() lastButton = new EventEmitter<any>();
  @Input() cssClass!: string;
}
