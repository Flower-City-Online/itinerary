import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../../services/core/modal/modal.service";
import {FormFieldType} from "nextsapien-component-lib";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-report-itinerary-modal',
  templateUrl: './report-itinerary-modal.component.html',
  styleUrl: './report-itinerary-modal.component.css'
})
export class ReportItineraryModalComponent implements OnInit {
  selectedItem: any;
  form: FormGroup = new FormGroup({
    rd: new FormControl(),
  });
  options = [
    { label: 'Spam & Unwanted Content', value: 1,selected:false },
    { label: 'Pornography or sexually explicit content', value: 2 , selected:false},
    { label: 'Child abuse', value: 3 , selected:false},
    { label: 'Promotes terrorism', value: 4 , selected:false},
    { label: 'Harassment or bullying', value: 5 , selected:false},
    { label: 'Suicide or self injury', value: 6 , selected:false},
    { label: 'Misinformation', value: 7 , selected:false},
    { label: 'Dangerous', value: 8 , selected:false},
    { label: 'Non of these are my issues', value: 9 , selected:false},
  ];
  constructor(private fb: FormBuilder,public modalService: ModalService) {
  }
  radioChecked(id:number, i:number){
    this.options.forEach(item=>{
      if(item.value !== id){
        item.selected = false;
      }else{
        item.selected = true;
      }
    })
    this.selectedItem = id
    console.log(this.selectedItem)
  }
  ngOnInit(): void {

  }

  test(){

  }
}
