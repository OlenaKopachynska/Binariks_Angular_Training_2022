import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private uService: UserService) { }

  private _addNewItemIconSource = new BehaviorSubject<boolean>(true);
  private _addFormSource = new BehaviorSubject<boolean>(false);
  private _showAccountIconSource = new BehaviorSubject<boolean>(true);


  toggleAddForm$ = this._addFormSource.asObservable();
  toggleAddNewItemIcon$ = this._addNewItemIconSource.asObservable();
  showAccountIcon$ = this._showAccountIconSource.asObservable();

  toggleAddForm(value: boolean) {
    this._addFormSource.next(value);
  }

  showAccountIcon(_: boolean) {
    let u = this.uService.getCurrentUser()
    console.log(u, "uuuu")
    u ? this._showAccountIconSource.next(true) : this._showAccountIconSource.next(false)
  }

  toggleAddNewItemIcon(value: boolean) {
    this._addNewItemIconSource.next(value);
  }



}