import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {TodoService} from "../services/todo.service";

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<any> {

  constructor(private todoService: TodoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.todoService.getToDo();
  }
}
