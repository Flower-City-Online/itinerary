import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICONS } from 'src/app/constants/constants';
import { IFilterMenuOptions } from 'src/app/interface/filterMenuOptions';
import { ApiService } from 'src/app/services/core/api.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.scss',
})
export class FilterMenuComponent implements OnInit {
  @Input() cssClass!: string;
  ICONS = ICONS;
  options: IFilterMenuOptions[] = [];
  filterControl = new FormControl();
  constructor(
    public apiService: ApiService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.apiService
      .get('/assets/filterMenuOptionsData.json')
      .subscribe((data) => {
        this.options = data as IFilterMenuOptions[];
        this.cdr.detectChanges();
        this.filterControl.setValue(this.options[0].value);
      });
  }

  changeSelection(): void {}
}
