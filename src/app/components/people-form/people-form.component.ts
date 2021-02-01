import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from "@angular/common";

import { PeopleService } from "../../services/people.service";
import { People } from "../../models/people";

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private peopleService: PeopleService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup ({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern("^[а-яА-Яa-zA-Z\ ]*$")
      ]),
      phone: new FormControl(null, [
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern("^[0-9\-\+\(\)\ ]*$")
      ]),
      link: new FormControl(null, [
        Validators.maxLength(1024),
        Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")        
      ]),
      text: new FormControl(null, [
        Validators.maxLength(500),
        Validators.pattern("^[а-яА-Яa-zA-Z0-9\-\+\(\)\:\ \n]*$")
      ])  
    })
  }

  submit() {
    if (this.form.invalid) {
      return  
    }  

    const newContact: People = {      
      name: this.form.value.name, 
      phone: this.form.value.phone,
      link: this.form.value.link,
      text: this.form.value.text, 
    }

    this.peopleService.createNewContact(newContact);
    this.form.reset();    
    this.location.back();
  }

  cancel() {
    this.form.reset();    
    this.location.back();    
  }

}
