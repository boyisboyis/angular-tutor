import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _count$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  get count$(): Observable<number> {
    return this._count$.asObservable();
  }

  public increase() {
    let count = this._count$.value;
    count++;
    this._count$.next(count);
  }

  public decrease() {
    let count = this._count$.value;
    count--;
    this._count$.next(count);
  }
}
