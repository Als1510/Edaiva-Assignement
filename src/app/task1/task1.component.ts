import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {

  answer;
  index;
  constructor() { }


  ngOnInit(): void {
  }

  getNumber(number) {
    this.index = number.value
    if(this.index%2==0) {
      this.answer = this.index*this.index-1
    } else{
      this.answer = this.index*this.index+1
    }
  }

}
