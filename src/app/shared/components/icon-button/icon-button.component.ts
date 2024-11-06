import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css',
})
export class IconButtonComponent implements OnInit {
  @Input() iconPath!: string;
  @Input() text!: string;
  @Input() customClass: string = '';
  @Input() height: string = '12';
  @Input() width: string = '13';
  @Input() disabled: boolean = false;
  @Input() type!: string;
  @Output() clickFunction = new EventEmitter<MouseEvent>();
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  clickFunc() {
    this.clickFunction.emit();
  }
}
