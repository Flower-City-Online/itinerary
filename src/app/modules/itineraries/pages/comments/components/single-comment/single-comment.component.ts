import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LibMenuItem } from 'nextsapien-component-lib';
import { ICONS } from 'src/app/constants/constants';
import { ICommentData } from 'src/app/interface/commentData';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrl: './single-comment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleCommentComponent {
  @Input() comment!: ICommentData;
  ICONS = ICONS;
  libMenuItem: LibMenuItem[] = [
    { title: 'Remove Featured', iconUrl: ICONS.report },
    { title: 'Delete Comment', iconUrl: ICONS.delete },
    { title: 'Report', iconUrl: ICONS.report },
  ];
}
