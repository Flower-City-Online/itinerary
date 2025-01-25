import { Component } from '@angular/core';
import { SharedModule } from '../../../../../../shared/shared.module';

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.css',
})
export class StoryListComponent {}
