import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormFieldType } from 'nextsapien-component-lib';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IReportOptions } from 'src/app/interface/reportOptions';
import { ApiService } from 'src/app/services/core/api.service';
import { ModalService } from '../../../../services/core/modal/modal.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-report-itinerary-modal',
  templateUrl: './report-itinerary-modal.component.html',
  styleUrls: ['./report-itinerary-modal.component.scss'],
})
export class ReportItineraryModalComponent implements OnInit, OnDestroy {
  selectedItem: number | undefined;
  radio: FormControl = new FormControl(0);
  options: IReportOptions[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    public modalService: ModalService,
    public apiService: ApiService,
  ) {}

  radioChecked(): void {
    if (this.radio.value === 9) {
      this.selectedItem = 9;
    } else {
      this.selectedItem = 0;
    }
  }

  ngOnInit(): void {
    this.apiService
      .get('/assets/reportsOptionsData.json')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.options = data as IReportOptions[];
      });
    this.radio.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((e: IReportOptions) => {
        if (e.value == 9) {
          this.selectedItem = 9;
        } else {
          this.selectedItem = 0;
        }
      });
  }

  ngOnDestroy(): void {
    // Complete the Subject to unsubscribe from all observables
    this.destroy$.next();
    this.destroy$.complete();
  }

  closeModal(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }

  onOk(): void {}

  protected readonly FormFieldType = FormFieldType;
}
