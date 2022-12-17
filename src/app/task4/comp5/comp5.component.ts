import { Component, OnInit } from '@angular/core';
import { Task4Service } from '../task4.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.scss']
})
export class Comp5Component implements OnInit {

  sharedData = ""
  constructor(
    private _task4: Task4Service
  ) { }

  ngOnInit(): void {
    this._task4.sharableData.subscribe((res)=>{
      this.sharedData = res
    })
  }

  updateData(data) {
    this._task4.sharableData.next(data.value)
  }

}
