import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormFieldType, SelectOption } from 'nextsapien-component-lib';

@Component({
  selector: 'app-form-field-demo',
  templateUrl: './form-field-demo.component.html',
  styleUrls: ['./form-field-demo.component.scss'],
})
export class FormFieldDemoComponent implements OnInit {
  public label = 'Example Label';
  public placeholder = 'Example Placeholder';
  public formFieldControl = new UntypedFormControl('', null);
  public submitted = false;
  public required = false;
  public maxLength = 524288;
  public type: `${FormFieldType}` = 'select';
  public iconHtml: SafeHtml = this.domSanitizer.bypassSecurityTrustHtml('<i class="icon-pencil">');
  public options: SelectOption<string>[] = [];
  public formTypes: `${FormFieldType}`[] = [
    'checkbox',
    'currency',
    'date',
    'message',
    'multiselectdropdown',
    'number',
    'percentage',
    'radio',
    'select',
    'text',
    'textarea',
    'toggle',
    'hyperlink',
    'incrementer',
    'range',
    'editor',
  ];
  public decimalPosition = 2;
  public hideCents = false;
  public hyperlinkTarget = '_blank';
  public messageValue: string = 'test message';
  public minValue: number = 0;
  public maxValue: number = 100;
  public dualKnobsControl: FormControl<boolean> = new FormControl();
  public pinControl: FormControl<boolean> = new FormControl(true);
  public reverseBarColorControl: FormControl<boolean> = new FormControl();
  public radioDeselectableState: Boolean = false;
  public formFieldCode: string = `<lib-form-field
      [label]="'Example Label'"
      [placeholder]="'Example Placeholder'"
      [formFieldControl]="exampleFormControl"
      [submitted]="false"
      [required]="true"
      [maxLength]="10"
      [type]="'select'"
      [options]="[{label: 'Option 1', value: 1}, {label: 'Option 2', value: 2}]"
      [radioDeselectable]="false"
  ></lib-form-field>`;
  private currentDate = new Date();
  public minDate: Date = new Date(this.currentDate.getFullYear() - 18, this.currentDate.getMonth(), this.currentDate.getDate());
  public maxDate: Date = new Date(this.currentDate.getFullYear() + 120, this.currentDate.getMonth(), this.currentDate.getDate());

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    Array.from({ length: 15 }, (_, index) => {
      this.options.push(new SelectOption('Option ' + index, 'Option ' + index));
    });
    this.handleRequiredChange(true);
  }

  public handleRequiredChange(event: boolean): void {
    if (this.required) {
      this.formFieldControl.setValidators(Validators.required);
      this.formFieldControl.updateValueAndValidity();
    } else {
      this.formFieldControl.clearValidators();
      this.formFieldControl.setErrors(null);
    }
  }

  public resetForm() {
    this.formFieldControl.reset();
  }

  public handleTypeChange(type: string): void {
    this.resetForm();
  }
}
