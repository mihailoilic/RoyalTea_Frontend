import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseDataService {

  protected storage: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor() { }

  getStorage() {
    return this.storage.asObservable();
  }

  setStorage(storage: any): void {
    this.storage.next(storage);
  }
}
