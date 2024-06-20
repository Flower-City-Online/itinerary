import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal-bottom-bar',
  templateUrl: './modal-bottom-bar.component.html',
  styleUrl: './modal-bottom-bar.component.css'
})
export class ModalBottomBarComponent {
  @Input() okText!: string;
  @Input() cancelText!: string;
  @Output() ok = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  constructor() {

  }

  onOk() {
    this.ok.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
