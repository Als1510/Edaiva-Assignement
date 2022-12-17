import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {
  phoneNo = []
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      number: this.fb.array([
        this.initnumber()
      ])
    });
    this.fa.valueChanges.subscribe(value => {
      console.log('name has changed:', value)
    });
  }

  initnumber() {
    return this.fb.group({
      from: this.fb.control('', Validators.required),
    });
  }

  get fa() { return this.myForm.get('number') as FormArray; }

  addGroup() {
    this.fa.push(this.initnumber());
  }

  removeGroup(i: number) {
    this.fa.removeAt(i);
  }

  onSubmit() {
    this.phoneNo = this.myForm.get('number').value
  } 

}
