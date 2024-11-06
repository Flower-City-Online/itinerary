import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-bottom-bar',
  templateUrl: './modal-bottom-bar.component.html',
  styleUrl: './modal-bottom-bar.component.css',
})
export class ModalBottomBarComponent {
  @Input() okText!: string;
  @Input() cancelText!: string;
  @Output() ok = new EventEmitter<MouseEvent>();
  @Output() cancel = new EventEmitter<MouseEvent>();

  onOk() {
    this.ok.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
