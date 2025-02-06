import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { ICommentsData } from 'src/app/interface/commentsdata';
import { ApiService } from 'src/app/services/core/api.service';

@Component({
  selector: 'app-comment-comparison',
  templateUrl: './comment-comparison.component.html',
  styleUrl: './comment-comparison.component.scss',
})
export class CommentComparisonComponent implements OnInit {
  @Input() isDraft!: boolean;
  cardData: ICommentsData[] | undefined;
  processedCardData: ICommentsData | undefined;
  ICONS = ICONS;

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getCommentsData();
  }

  private InvalidDataCheck(data: string | number | null | undefined): boolean {
    return (
      data?.toString().length == 0 ||
      data == null ||
      data == undefined ||
      data == '0' ||
      data == 0 ||
      data == '-'
    );
  }

  private processCardData(data: ICommentsData): ICommentsData {
    return {
      ...data,
      upVotes: this.InvalidDataCheck(data.upVotes) ? '00' : data.upVotes,
      title: this.InvalidDataCheck(data.title)
        ? 'Untitled Itinerary'
        : data.title,
      userName: this.InvalidDataCheck(data.userName) ? 'You' : data.userName,
      timeAgo: this.InvalidDataCheck(data.timeAgo) ? '' : data.timeAgo,

      views: this.InvalidDataCheck(data.views) ? 0 : data.views,
      commentText: this.InvalidDataCheck(data.commentText)
        ? ''
        : data.commentText,

      userimageSrc: this.InvalidDataCheck(data.userimageSrc)
        ? ICONS.notSpecified
        : data.userimageSrc,
    };
  }

  getCommentsData() {
    this.apiService.get('/assets/commentsData.json').subscribe((data) => {
      this.cardData = data as ICommentsData[];
      this.processedCardData = this.processCardData(this.cardData[0]);
      this.cdr.detectChanges();
    });
  }
  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(): void {}
}
