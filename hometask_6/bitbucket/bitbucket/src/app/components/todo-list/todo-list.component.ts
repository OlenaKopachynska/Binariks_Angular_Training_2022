import {Component, OnInit} from '@angular/core';
import {IToDo} from "../../models/IToDo";
import {TodoService} from "../../services/todo.service";
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from "@angular/router";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  toDoArr: IToDo[] = [];
  faArrowDown = faArrowDown;
  uncompletedVisible: boolean = true;
  completedVisible: boolean = true;
  rotateUncompletedArrow: boolean = false;
  rotateCompletedArrow: boolean = false;
  completed: number | undefined;
  uncompleted: number | undefined;
  show!: boolean;

  constructor(private route: ActivatedRoute, private _todoService: TodoService, private _uiService: UiService) {
  }

  ngOnInit() {

    this._uiService.toggleAddNewItemIcon(true);
    this._uiService.toggleAddForm(false)

    this.toDoArr = this.route.snapshot.data['todo_list'];
    this.completed = this.route.snapshot.data['todo_list'].filter((todo: any) => todo.done).length || 0;
    this.uncompleted = this.route.snapshot.data['todo_list'].filter((todo: any) => !todo.done).length || 0;
  }

  onClicked(clicked: boolean) {
    if (clicked) {
      this.completed = this.toDoArr.filter((todo: any) => todo.done).length || 0;
      this.uncompleted = this.toDoArr.filter((todo: any) => !todo.done).length || 0;
    }
  }

  onAddNew(added: boolean){

    //console.log(added, "added")
    //console.log(this.route.snapshot.data['todo_list'], "got array ")
    if(added) {

      let arr = sessionStorage.getItem('todos');
      if( arr) {
        this.toDoArr = JSON.parse(arr)
        this.completed = this.toDoArr.filter((todo: any) => todo.done).length || 0;
        this.uncompleted = this.toDoArr.filter((todo: any) => !todo.done).length || 0;
      }
      //console.log("here")
      //window.location.reload();
    }

  }

  toggleUncompletedToDos() {
    this.uncompletedVisible = !this.uncompletedVisible;
  }

  toggleCompletedToDos() {
    this.completedVisible = !this.completedVisible;
  }

  rotateChevron(todoType: string) {
    switch (todoType) {
      case "uncompleted": {
        this.rotateUncompletedArrow = !this.rotateUncompletedArrow;
        break;
      }
      case "completed": {
        this.rotateCompletedArrow = !this.rotateCompletedArrow;
        break;
      }
      default: {
        break;
      }
    }
  }
}
