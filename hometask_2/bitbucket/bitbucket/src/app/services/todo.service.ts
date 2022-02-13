import {Injectable} from '@angular/core';
import {IToDo} from "../models/IToDo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoArr: IToDo[] = [];

  getToDo(): IToDo[] {
    return this.toDoArr;
  }

  addToDo(todo: any) {
    this.toDoArr.push(todo)
  }
}
