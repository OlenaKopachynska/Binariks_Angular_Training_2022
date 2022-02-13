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
  show: boolean = false;

  constructor( private uiService: UiService) {
  }

  ngOnInit(): void {
    this.uiService.toggleAddNewItemIcon$.subscribe(val => {
      this.show = val
    })
  }

  toggleForm() {
    this.uiService.toggleAddForm(true)
  }
}
