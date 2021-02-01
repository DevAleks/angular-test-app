import { Component, OnInit } from '@angular/core';

import { PeopleService } from "../../services/people.service";
import { People } from "../../models/people";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: People[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(
      (data) => this.people = data,
      (error) => console.log(error)
    );    
  }
}
