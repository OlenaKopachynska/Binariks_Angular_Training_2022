import {Component, Input, OnInit} from '@angular/core';
import {IToDo} from "../../models/IToDo";
import {TodoService} from "../../services/todo.service";
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() showList: boolean | undefined;

  toDoArr: IToDo[] = [];
  faArrowDown = faArrowDown;
  uncompletedVisible: boolean = true;
  completedVisible: boolean = true;
  rotateUncompletedArrow: boolean = false;
  rotateCompletedArrow: boolean = false;


  constructor(private toDoService: TodoService) {
  }


  ngOnInit(): void {
    this.toDoArr = this.toDoService.getToDo()
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
