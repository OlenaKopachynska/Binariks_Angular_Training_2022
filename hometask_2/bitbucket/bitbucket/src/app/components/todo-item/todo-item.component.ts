import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: any;

  constructor() { }

  ngOnInit(): void {
  }
  changeStatus(todo: any) {
    todo.done = !todo.done;
  }
}
