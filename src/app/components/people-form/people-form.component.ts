import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
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
  newFields: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private peopleService: PeopleService,
    private location: Location
  ) { 

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern("^[а-яА-Яa-zA-Z\ \-]*$")
      ]],
      surname: [null, [
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern("^[а-яА-Яa-zA-Z\ \-]*$")
      ]],      
      phone: [null, [
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern("^[0-9\-\+\(\)\ ]*$")
      ]],
      newFields: this.formBuilder.array(
        []
      ),
 
    })
  }

  createNewField(): FormGroup {
    return this.formBuilder.group({
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
    });
  }

  addNewFields() {
    this.newFields = this.form.get('newFields') as FormArray;
    this.newFields.push(this.createNewField());
  }

  submit() {
    if (this.form.invalid) {
      return  
    }  

    const newContact: People = {      
      name: this.form.value.name, 
      surname: this.form.value.surname,
      phone: this.form.value.phone,
      newFields: [
        {
          phone: this.form.value.phone,
          link: this.form.value.link,
          text: this.form.value.text,
        }
      ],
       
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
