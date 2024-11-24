import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { ICardData } from 'src/app/interface/cardData';
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
  ICONS = ICONS;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (!this.isDraft) {
      this.apiService.get('/assets/data.json').subscribe((data) => {
        this.cardData = data as ICardData;
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
    }
  }

  nullCheck(data: string | number | null | undefined): boolean {
    return (
      data?.toString().length == 0 ||
      data == null ||
      data == undefined ||
      data == '0' ||
      data == 0 ||
      data == '-'
    );
  }
  cardDataValidater(
    data: string | number | null | undefined,
    type: string,
  ): string | number | null | undefined {
    if (type == 'imageSrc' && this.nullCheck(data)) {
      return 'assets/images/untitledImage.svg';
    } else if (type == 'upVotes' && this.nullCheck(data)) {
      return '00';
    } else if (type == 'title' && this.nullCheck(data)) {
      return 'Untitled Itinerary';
    } else if (type == 'userName' && this.nullCheck(data)) {
      return 'You';
    } else if (type == 'timeAgo' && this.nullCheck(data)) {
      return '';
    } else if (type == 'users' && this.nullCheck(data)) {
      return 'No Users Yet';
    } else if (type == 'views' && this.nullCheck(data)) {
      return '0';
    } else if (type == 'comments' && this.nullCheck(data)) {
      return '0';
    } else if (type == 'shares' && this.nullCheck(data)) {
      return '0';
    } else if (type == 'userimageSrc' && this.nullCheck(data)) {
      return ICONS.notSpecified;
    } else if (type == 'location' && this.nullCheck(data)) {
      return 'Not Specified';
    }
    return data;
  }

  protected readonly parseInt = parseInt;
}
