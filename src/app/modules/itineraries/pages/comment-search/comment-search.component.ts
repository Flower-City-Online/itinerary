import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';

@Component({
  selector: 'app-comment-search',
  templateUrl: './comment-search.component.html',
  styleUrl: './comment-search.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class CommentSearchComponent implements OnInit {
  ICONS = ICONS;
  searchTerm: string = '';

  visibleComments: string[] = [];
  private comments: string[] = [
    "I had a great experience out there. I would say it's perfect for a coffee lover.",
    'Loving the great ideas here, yet it’s time for me to step out.',
    'It’s been a great exchange of ideas, but I’ve reached my limit—peace out!',
    'Absolutely loved the vibe of this place! Can’t wait to visit again.',
    'The discussions here are top-notch. Keep up the great work, everyone!',
    'Such a refreshing perspective! This place never fails to inspire me.',
    "I'm learning so much from everyone here—thank you all!",
    'This is exactly the kind of place I was looking for. So insightful!',
    'Had an amazing time here, but I need to wrap up for now. Until next time!',
    'Great energy and discussions! Looking forward to more in the future.',
  ];

  ngOnInit(): void {
    this.visibleComments = this.comments;
  }

  search(e: string): void {
    this.searchTerm = e.toLowerCase().trim();

    if (!this.searchTerm) {
      this.visibleComments = this.comments;
      return;
    }

    const words = this.searchTerm.split(/\s+/);

    this.visibleComments = this.comments
      .filter((comment) =>
        words.every((word) => comment.toLowerCase().includes(word)),
      )
      .map((comment) => {
        let highlightedText = comment;
        words.forEach((word) => {
          const regex = new RegExp(`(${word})`, 'gi');
          highlightedText = highlightedText.replace(
            regex,
            `<span class="highlight">$1</span>`,
          );
        });
        return highlightedText;
      });
  }
}
