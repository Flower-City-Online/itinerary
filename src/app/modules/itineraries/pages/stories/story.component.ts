import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/core/modal/modal.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrl: './story.component.css',
})
export class StoryComponent {
  constructor(public modalService: ModalService) {}
}
