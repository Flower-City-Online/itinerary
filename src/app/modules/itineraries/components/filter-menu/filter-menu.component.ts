import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
export class FilterMenuComponent {
  @Input() cssClass!: string;
  ICONS = ICONS;
  options: IFilterMenuOptions[] = [];

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .get('/assets/filterMenuOptionsData.json')
      .subscribe((data) => {
        this.options = data as IFilterMenuOptions[];
      });
  }

  filterControl = new FormControl(this.options[0].value);

  changeSelection(): void {}
}
