import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-todo-item-info',
  templateUrl: './todo-item-info.component.html',
  styleUrls: ['./todo-item-info.component.scss']
})
export class TodoItemInfoComponent implements OnInit {
  todo: any;
  id: any;
  sub: any;

  constructor(private _activatedroute: ActivatedRoute,
              private router: Router,
              private _todoService: TodoService,
              private _uiService: UiService) {
  }

  ngOnInit(): void {

    this._uiService.toggleAddNewItemIcon(false)

    this.sub = this._activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.todo = this._todoService.getOneDo(this.id)
    });
  }

  edit(todo: any) {
    this.router.navigate(['/todo-list', todo.id, 'edit'])
    console.log(todo)
  }

}
