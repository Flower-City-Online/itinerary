import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBarComponent {
  tabMenuItems = [
    {
      label: 'Explore',
      icon: 'pi pi-fw pi-home',
      routerLink: ItenariesRoutesEnum.ITINERARY_EXPLORE,
    },
    {
      label: 'Builder',
      icon: 'pi pi-fw pi-map-marker',
      routerLink: ItenariesRoutesEnum.ITINERARY_BUILDER,
    },
    {
      label: 'Favorites',
      icon: 'pi pi-fw pi-user',
      routerLink: ItenariesRoutesEnum.ITINERARY_FAVOURITES,
    },
  ];
  onActiveItemChange($event: string): void {}
}
