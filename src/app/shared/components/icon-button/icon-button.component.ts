import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
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
    console.log('Method not implemented.');
  }

  clickFunc(): void {
    this.clickFunction.emit();
  }
}
