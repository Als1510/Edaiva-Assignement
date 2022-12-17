import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Task4Service {

  sharableData = new BehaviorSubject<any>('ABC')
  constructor() { }
}
