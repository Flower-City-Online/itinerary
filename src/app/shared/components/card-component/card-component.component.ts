import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LibMenuItem} from "nextsapien-component-lib";

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.css'
})

export class CardComponent implements OnInit {
  @Input() libMenuItem!: LibMenuItem[];
  @Input() isDraft!: boolean;
  cardData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // console.log(this.isDraft)
    if(!this.isDraft){
      this.http.get<any>('/assets/data.json').subscribe(data => {
        this.cardData = data;
      });
    }else{
      this.cardData = {
        "upVotes": "",
        "downVotes": 5,
        "title": "",
        "userName": "",
        "timeAgo": "",
        "location": "",
        "views": 0,
        "comments": 0,
        "shares": 0,
        "users": 0,
        "imageSrc": "",
        "userimageSrc": "",
        "isDraft": true
      };
    }
  }

  test($event: any) {
    // console.log($event);
  }
  nullCheck(data:any):boolean{
    // console.log(data)
    return (data.toString().length == 0 || data == null || data == undefined || (data == "0" || data == 0) || data == "-");
  }
  cardDataValidater(data:any,type:string):string{
    if(type == 'imageSrc' && this.nullCheck(data)) {
      return "assets/images/untitledImage.svg"
    }else if(type == 'upVotes' && this.nullCheck(data)){
      return "00"
    }else if(type == 'title' && this.nullCheck(data)){
      return "Untitled Itinerary"
    }else if(type == 'userName' && this.nullCheck(data)){
      return "You"
    }else if(type == 'timeAgo' && this.nullCheck(data)){
      return ""
    }else if(type == 'users' && this.nullCheck(data)){
      return "No Users Yet"
    }else if(type == "views" && this.nullCheck(data)){
      return "0"
    }else if(type == "comments" && this.nullCheck(data)){
      return "0"
    }else if(type == "shares" && this.nullCheck(data)){
      return "0"
    }else if(type == "userimageSrc" && this.nullCheck(data)){
      return "assets/icons/questionMark.svg"
    }else if(type == "location" && this.nullCheck(data)){
      return "Not Specified"
    }
    return data;
  }

  protected readonly parseInt = parseInt;
}
