import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-container',
  templateUrl: './tag-container.component.html',
  styleUrl: './tag-container.component.css'
})
export class TagContainerComponent {
@Input() value = '';
}
