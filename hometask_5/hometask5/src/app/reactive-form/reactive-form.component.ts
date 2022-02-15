import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm!: FormGroup;
  isUsa: boolean = false;

  Country: any = ['Ukraine', 'Germany', 'USA', 'Spain']
  State: any = ['Arizona', 'California', 'Colorado', 'New York', 'Pennsylvania']
  Skill: any = ["Angular", "HTML", "Typescript"]

  constructor() {
  }

  ngOnInit() {

    this.userForm = new FormGroup({
      Name: new FormControl('', ),
      Email: new FormControl('', ),
      Country: new FormControl('', ),
      State: new FormControl('',),
      Skill: new FormArray([], ),
      Password: new FormControl('', [Validators.required]),
      Sex: new FormControl('', ),
    });


  }

  checkFirstDropdown($event: any) {
    if ($event.target.value === "3: USA")
      this.isUsa = true;
  }

  onCheckboxChange(e: any) {
    const arr: FormArray = this.userForm.get('Skill') as FormArray;
    console.log(e, "ggg")
    if (e.target.checked) {
      arr.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      arr.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          arr.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
    } else {
      alert(' form is not valid!!')
    }
  }
}
