import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormFieldType } from 'nextsapien-component-lib';
import { ModalService } from '../../../../services/core/modal/modal.service';

@Component({
  selector: 'app-report-itinerary-modal',
  templateUrl: './report-itinerary-modal.component.html',
  styleUrl: './report-itinerary-modal.component.css',
})
export class ReportItineraryModalComponent implements OnInit {
  selectedItem: number;
  formGroup = new FormGroup({
    radio: new FormControl(0),
  });
  options = [
    { label: 'Spam & Unwanted Content', value: 1, selected: false },
    {
      label: 'Pornography or sexually explicit content',
      value: 2,
      selected: false,
    },
    { label: 'Child abuse', value: 3, selected: false },
    { label: 'Promotes terrorism', value: 4, selected: false },
    { label: 'Harassment or bullying', value: 5, selected: false },
    { label: 'Suicide or self injury', value: 6, selected: false },
    { label: 'Misinformation', value: 7, selected: false },
    { label: 'Dangerous', value: 8, selected: false },
    { label: 'Non of these are my issues', value: 9, selected: false },
  ];
  constructor(
    private fb: FormBuilder,
    public modalService: ModalService,
  ) {}

  radioChecked() {
    if (this.formGroup.controls.radio.value == 9) {
      this.selectedItem = 9;
    } else {
      this.selectedItem = 0;
    }
  }
  ngOnInit(): void {
    this.formGroup.controls.radio.valueChanges.subscribe((e) => {
      if (e == 9) {
        this.selectedItem = 9;
      } else {
        this.selectedItem = 0;
      }
    });
  }

  closeModal() {
    this.modalService.toggleModal = !this.modalService.toggleModal;
  }

  protected readonly FormFieldType = FormFieldType;
}
