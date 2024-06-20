import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bottom-navigation-items',
  templateUrl: './bottom-navigation-items.component.html',
  styleUrl: './bottom-navigation-items.component.css'
})
export class BottomNavigationItemsComponent {
  @Input() label!: string;
  @Input() iconPath!: string;
  @Input() routerLink!: string;
  @Input() cssClass!: string;
  @Input() selected!: boolean;
}
