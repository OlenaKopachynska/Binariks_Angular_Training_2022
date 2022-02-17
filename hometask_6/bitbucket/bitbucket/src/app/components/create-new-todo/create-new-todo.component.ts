import { Component, OnInit } from '@angular/core';
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-create-new-todo',
  templateUrl: './create-new-todo.component.html',
  styleUrls: ['./create-new-todo.component.scss']
})
export class CreateNewTodoComponent implements OnInit {


  constructor(private _uiService: UiService) {
  }
  ngOnInit(): void {
    this._uiService.toggleAddNewItemIcon(false);
    this._uiService.toggleAddForm(true)

  }

}
