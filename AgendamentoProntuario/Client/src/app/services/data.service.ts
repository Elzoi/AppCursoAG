import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  
  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();
  
  constructor() { }
  
  changeData(T): void {
    this.dataSource.next(T)
  }

  removeData(): void{
    
  }
}