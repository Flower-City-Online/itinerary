import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ICONS } from 'src/app/constants/constants';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';
import { ICommentData } from 'src/app/interface/commentData';
import { IFilterMenuOptions } from 'src/app/interface/filterMenuOptions';
import { ApiService } from 'src/app/services/core/api.service';
import { ModalService } from 'src/app/services/core/modal/modal.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent {
  ICONS = ICONS;
  @Input() cssClass!: string;
  options: IFilterMenuOptions[] = [];
  filterControl = new FormControl();
  comments: ICommentData[] = [];

  constructor(
    public router: Router,
    public modalService: ModalService,
    public apiService: ApiService,
    private cdr: ChangeDetectorRef,
  ) {}

  backButtonClick(): void {
    window.history.back();
  }

  searchButtonClick(): void {
    this.router.navigate([ItenariesRoutesEnum.SEARCH]).then((r) => {});
  }

  ngOnInit(): void {
    this.apiService
      .get('/assets/filterMenuOptionsData.json')
      .subscribe((data) => {
        this.options = data as IFilterMenuOptions[];
        this.cdr.detectChanges();
        this.filterControl.setValue(this.options[0].value);
      });
    this.apiService
      .get<ICommentData[]>('/assets/commentsData.json')
      .subscribe((data) => {
        this.comments = data;
        this.cdr.detectChanges();
      });
  }

  changeSelection(): void {}
}
