import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../../services/todo.service";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-todo-item-info-edit',
  templateUrl: './todo-item-info-edit.component.html',
  styleUrls: ['./todo-item-info-edit.component.scss']
})
export class TodoItemInfoEditComponent implements OnInit {

  id: any = this.route.snapshot.paramMap.get('id');
  todo: any;
  todo_name?: string;
  todo_info?: string;

  constructor(private router: Router, private route: ActivatedRoute, private _toDoService: TodoService, private _uiService: UiService) {
  }

  ngOnInit(): void {
    this._uiService.toggleAddNewItemIcon(false)
    this.todo = this._toDoService.getOneDo(this.id);
  }

  onSave() {

    const data: any = {
      text: this.todo_name ? this.todo_name : null,
      info: this.todo_info ? this.todo_info : null
    }

    const id = this.route.snapshot.paramMap.get('id');
    this._toDoService.editToDo(id, data);

    this.router.navigate(['../'], {relativeTo: this.route});

  }
}
