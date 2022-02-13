import { Component, OnInit } from '@angular/core';
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-add-new-item-button',
  templateUrl: './add-new-item-button.component.html',
  styleUrls: ['./add-new-item-button.component.scss']
})
export class AddNewItemButtonComponent implements OnInit {

  show: boolean = true;

  constructor( private uiService: UiService) {}

  ngOnInit(): void {
    this.uiService.toggleAddNewItemButton$.subscribe(val=>this.show = val)
  }

  toggleAddItemForm() {
    this.uiService.toggleAddNewItemButton(false)
    this.uiService.toggleAddForm(true)
  }
}
