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
  cardDataForLocations = {
    locationColumn1: [
      { icon: ICONS.temp, name: 'Palace' },
      { icon: ICONS.palace2, name: 'Template' },
      { icon: ICONS.palace2, name: 'Optional' },
      { icon: ICONS.palace2, name: 'Optional' },
    ],
    locationColumn2: [
      { icon: ICONS.coffee, name: 'Coffee shop' },
      { icon: ICONS.template, name: 'Optional' },
      { icon: ICONS.template, name: 'Optional' },
      { icon: ICONS.template, name: 'Optional' },
    ],
  };

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    if (!this.isDraft) {
      this.apiService.get('/assets/commentsData.json').subscribe((data) => {
        this.cardData = data as ICommentsData[];
        this.processedCardData = this.processCardData(this.cardData[0]);
        this.cdr.detectChanges();
      });
    }
  }

  private nullCheck(data: string | number | null | undefined): boolean {
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
      upVotes: this.nullCheck(data.upVotes) ? '00' : data.upVotes,
      title: this.nullCheck(data.title) ? 'Untitled Itinerary' : data.title,
      userName: this.nullCheck(data.userName) ? 'You' : data.userName,
      timeAgo: this.nullCheck(data.timeAgo) ? '' : data.timeAgo,

      views: this.nullCheck(data.views) ? 0 : data.views,
      commentText: this.nullCheck(data.commentText) ? '' : data.commentText,

      userimageSrc: this.nullCheck(data.userimageSrc)
        ? ICONS.notSpecified
        : data.userimageSrc,
    };
  }

  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(): void {}
}
