import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-heading-with-button',
  templateUrl: './custom-heading-with-button.component.html',
  styleUrl: './custom-heading-with-button.component.css'
})
export class CustomHeadingWithButtonComponent {
  @Input() heading!: string;
  @Input() buttonText!: string;
  @Input() buttonIcon!: string;
  @Input() cssClass!: string;
  @Output() buttonClick = new EventEmitter<any>();
}
