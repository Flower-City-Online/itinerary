import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { ICardData } from 'src/app/interface/cardData';
import { Iicon } from 'src/app/interface/icon';
import { ApiService } from 'src/app/services/core/api.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-cutom-card',
  templateUrl: './cutom-card.component.html',
  styleUrl: './cutom-card.component.scss',
})
export class CutomCardComponent {
  @Input() libMenuItem!: LibMenuItem[];
  @Input() isDraft!: boolean;
  cardData: ICardData | undefined;
  processedCardData: ICardData | undefined;
  ICONS: Iicon = ICONS;
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
      this.apiService.get('/assets/data.json').subscribe((data) => {
        this.cardData = data as ICardData;
        this.processedCardData = this.processCardData(this.cardData);
        this.cdr.detectChanges();
      });
    } else {
      this.cardData = {
        upVotes: '',
        downVotes: 5,
        title: '',
        userName: '',
        timeAgo: '',
        location: '',
        views: 0,
        comments: 0,
        shares: 0,
        users: 0,
        imageSrc: '',
        userimageSrc: '',
        isDraft: true,
      };
      this.processedCardData = this.processCardData(this.cardData);
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

  private processCardData(data: ICardData): ICardData {
    return {
      ...data,
      upVotes: this.nullCheck(data.upVotes) ? '00' : data.upVotes,
      title: this.nullCheck(data.title) ? 'Untitled Itinerary' : data.title,
      userName: this.nullCheck(data.userName) ? 'You' : data.userName,
      timeAgo: this.nullCheck(data.timeAgo) ? '' : data.timeAgo,
      users: this.nullCheck(data.users) ? 0 : data.users,
      views: this.nullCheck(data.views) ? 0 : data.views,
      comments: this.nullCheck(data.comments) ? 0 : data.comments,
      shares: this.nullCheck(data.shares) ? 0 : data.shares,
      imageSrc: this.nullCheck(data.imageSrc) ? ICONS.untitled : data.imageSrc,
      userimageSrc: this.nullCheck(data.userimageSrc)
        ? ICONS.notSpecified
        : data.userimageSrc,
      location: this.nullCheck(data.location) ? 'Not Specified' : data.location,
    };
  }

  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(): void {}
}
