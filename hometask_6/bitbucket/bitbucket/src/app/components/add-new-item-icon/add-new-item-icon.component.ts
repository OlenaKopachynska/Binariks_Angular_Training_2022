import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-add-new-item-icon',
  templateUrl: './add-new-item-icon.component.html',
  styleUrls: ['./add-new-item-icon.component.scss']
})

export class AddNewItemIconComponent implements OnInit {

  faPlus = faPlus;
  isFormShown!: boolean;
  isIconShown!: boolean;

  constructor( private _uiService: UiService) {
  }

  ngOnInit(): void {
    this._uiService.toggleAddForm$.subscribe(val => {
      this.isFormShown = val
    })
    this._uiService.toggleAddNewItemIcon$.subscribe(val => {
      this.isIconShown = val
    })
  }

  toggleForm() {
    this._uiService.toggleAddForm(!this.isFormShown)
  }
}
