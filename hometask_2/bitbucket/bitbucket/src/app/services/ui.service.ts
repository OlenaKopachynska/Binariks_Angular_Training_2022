import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() { }

  private _addFormSource = new Subject<boolean>();
  private _addNewItemButtonSource = new Subject<boolean>();
  private _addNewItemIconSource = new Subject<boolean>();

  toggleAddForm$ = this._addFormSource.asObservable();
  toggleAddNewItemButton$ = this._addNewItemButtonSource.asObservable();
  toggleAddNewItemIcon$ = this._addNewItemIconSource.asObservable();

  toggleAddForm(value: boolean) {
    this._addFormSource.next(value);
  }

  toggleAddNewItemButton(value: boolean) {
    this._addNewItemButtonSource.next(value);
  }

  toggleAddNewItemIcon(value: boolean) {
    this._addNewItemIconSource.next(value);
  }
}
