import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

import { People } from "../models/people";

@Injectable({ providedIn: "root" })
export class PeopleService {
  public contacts: People[] = [];
  counter = 0; 

  constructor(private httpClient: HttpClient) {}

  getPeople(): Observable<People[]> {
    return this.httpClient
      .get<People[]>("/assets/data.json")
      .pipe(
        tap(
          data => data.push(...this.contacts)          
        )
      )      
  }

  createNewContact(newContact: People) {
    this.contacts.push(newContact);
  }
 
}
