import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { ICommentsData } from 'src/app/interface/commentsdata';
import { Iicon } from 'src/app/interface/icon';
import { ApiService } from 'src/app/services/core/api.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent implements OnInit {
  @Input() libMenuItem!: LibMenuItem[];
  commentsData: ICommentsData[] | undefined;
  ICONS: Iicon = ICONS;

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getCommentsData();
  }

  getCommentsData() {
    this.apiService.get('/assets/commentsData.json').subscribe((data) => {
      this.commentsData = data as ICommentsData[];
      this.cdr.detectChanges();
    });
  }
  handleMenueItemSelect(): void {}
  handleMenuItemChange(): void {}
  handleMenuClick(): void {}
}
