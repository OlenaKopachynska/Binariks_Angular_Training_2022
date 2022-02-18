import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor() {
  }

  private _addNewItemIconSource = new BehaviorSubject<boolean>(true);
  private _addFormSource = new BehaviorSubject<boolean>(false);
  private _showAccountIconSource = new BehaviorSubject<boolean>(false);


  toggleAddForm$ = this._addFormSource.asObservable();
  toggleAddNewItemIcon$ = this._addNewItemIconSource.asObservable();
  showAccountIcon$ = this._showAccountIconSource.asObservable();

  toggleAddForm(value: boolean) {
    this._addFormSource.next(value);
  }

  showAccountIcon(val: boolean) {
      this._showAccountIconSource.next(val);
  }

  toggleAddNewItemIcon(value: boolean) {
    this._addNewItemIconSource.next(value);
  }



}
