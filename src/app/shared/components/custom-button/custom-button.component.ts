import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
})
export class CustomButtonComponent {
  @Output() clickEvent = new EventEmitter<MouseEvent>();
  @Input() title!: string;
  @Input() icon!: string;
  @Input() gap!: string;
  @Input() customClass!: string;
}
