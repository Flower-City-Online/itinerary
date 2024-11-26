import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormFieldType } from 'nextsapien-component-lib';
import { Subscription } from 'rxjs';
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
  private valueChangesSubscription: Subscription | undefined;
  private optionsSubscription: Subscription | undefined;

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
    this.apiService.get('/assets/reportsOptionsData.json').subscribe((data) => {
      this.options = data as IReportOptions[];
    });

    this.valueChangesSubscription = this.radio.valueChanges.subscribe(
      (e: IReportOptions) => {
        if (e.value == 9) {
          this.selectedItem = 9;
        } else {
          this.selectedItem = 0;
        }
      },
    );
  }

  ngOnDestroy(): void {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
    if (this.optionsSubscription) {
      this.optionsSubscription.unsubscribe();
    }
  }

  closeModal(): void {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }

  onOk(): void {}

  protected readonly FormFieldType = FormFieldType;
}
