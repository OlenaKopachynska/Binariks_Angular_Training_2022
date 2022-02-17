import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: any;
  @Input() id: any;
  @Output() changed = new EventEmitter<any>();

  toDoArr!: any
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.toDoArr = this.route.snapshot.data['todo_list'];
  }

  changeStatus(todo: any) {
    todo.done = !todo.done;
    this.changed.emit(true);
    sessionStorage.setItem('todos', JSON.stringify(this.toDoArr));
  }
}
