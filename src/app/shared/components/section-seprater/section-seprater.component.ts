import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-section-seprater',
  templateUrl: './section-seprater.component.html',
  styleUrl: './section-seprater.component.scss',
})
export class SectionSepraterComponent {}
