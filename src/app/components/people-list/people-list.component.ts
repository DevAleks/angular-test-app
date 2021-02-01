import { Component, OnInit } from '@angular/core';
//import { Subscription } from "rxjs";

import { PeopleService } from "../../services/people.service";
import { People } from "../../models/people";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: People[];
//  peopleListSub: Subscription;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
//    this.peopleListSub = 
    this.peopleService.getPeople().subscribe(
      (data) => this.people = data,
      (error) => console.log(error)
    );    
  }

/*
  ngOnDestroy(): void {
    if (this.peopleListSub) {
      this.peopleListSub.unsubscribe();
    }    
  }
*/

}
