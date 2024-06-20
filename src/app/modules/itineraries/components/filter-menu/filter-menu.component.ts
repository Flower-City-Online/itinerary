import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {filter} from "rxjs";

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.css'
})
export class FilterMenuComponent {
  @Input() cssClass!: string;
  options = [
    { label: 'Featured', value: '1' },
    { label: 'Hot', value: '2' },
    { label: 'Best', value: '3' },
    { label: 'New', value: '4' }
  ];
  formGroup = new FormGroup({
    filter: new FormControl(this.options[0].value)
  })

  changeSelection() {
    // @ts-ignore
    console.log(this.formGroup.get('filter').value)
  }
}
