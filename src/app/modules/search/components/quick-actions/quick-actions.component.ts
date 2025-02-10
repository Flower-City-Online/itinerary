import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS } from 'src/app/constants/constants';
import { ItenariesRoutesEnum } from 'src/app/enums/ItenariesRoutes.enum';
import { Iicon } from 'src/app/interface/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.scss',
})
export class QuickActionsComponent {
  ICONS: Iicon = ICONS;
  ItineraryRoutes = ItenariesRoutesEnum;
}
