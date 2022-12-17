import { Component, OnInit } from '@angular/core';
import { Task4Service } from '../task4.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  sharedData = ""
  constructor(
    private _task4: Task4Service
  ) { }

  ngOnInit(): void {
    this._task4.sharableData.subscribe((res)=>{
      this.sharedData = res
    })
  }

}
