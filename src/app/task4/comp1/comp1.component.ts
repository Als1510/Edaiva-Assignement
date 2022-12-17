import { Component, OnInit } from '@angular/core';
import { Task4Service } from '../task4.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

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
