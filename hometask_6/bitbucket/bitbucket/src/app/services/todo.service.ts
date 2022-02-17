import {Injectable} from '@angular/core';
import {IToDo} from "../models/IToDo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoArr: IToDo[] = [];

  getToDo(): any {
    let todo_array = sessionStorage.getItem('todos');
    if( todo_array) {
      this.toDoArr = JSON.parse(todo_array)
    }

    console.log(this.toDoArr, "from  getToDo() service")
    //this.toDoArr = JSON.parse(localStorage.getItem('todos');)
    return this.toDoArr;
  }

  getOneDo(id: any) {
    let todo_array = sessionStorage.getItem('todos');
    if( todo_array) {
      this.toDoArr = JSON.parse(todo_array)
    }
    return this.toDoArr.find(todo => todo.id == id);
  }

  editToDo(id: any, data: any) {
    let todo_array = sessionStorage.getItem('todos');
    if( todo_array) {
      this.toDoArr = JSON.parse(todo_array)
    }


    let todo = this.toDoArr.find(todo => todo.id == id);

    if (todo) {

      if (data.text) {
        todo.text = data.text;
      }

      todo.info = data.info;
    }

    sessionStorage.setItem('todos', JSON.stringify(this.toDoArr));

    //return todo

  }

  addToDo(todo: any) {
    let todo_array = sessionStorage.getItem('todos');
    if( todo_array) {
      this.toDoArr = JSON.parse(todo_array)
    }
    this.toDoArr.push(todo);
    sessionStorage.setItem('todos', JSON.stringify(this.toDoArr));
  }
}
