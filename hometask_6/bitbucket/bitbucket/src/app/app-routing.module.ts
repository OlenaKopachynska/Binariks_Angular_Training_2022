import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CreateNewTodoComponent} from "./components/create-new-todo/create-new-todo.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoItemInfoComponent} from "./components/todo-item-info/todo-item-info.component";
import {TodoItemInfoEditComponent} from "./components/todo-item-info-edit/todo-item-info-edit.component";
import {AccountComponent} from "./components/account/account.component";
import {LoginComponent} from "./components/login/login.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {TodoResolver} from "./resolvers/todo.resolver";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  {path: 'home', canActivate: [AuthGuardService], component: HomeComponent},
  {path: 'account', canActivate: [AuthGuardService], component: AccountComponent, resolve: { todo_list: TodoResolver }},
  {path: 'login', component: LoginComponent},
  {path: 'create-new-todo', canActivate: [AuthGuardService], component: CreateNewTodoComponent},
  {path: 'todo-list', canActivate: [AuthGuardService], component: TodoListComponent, resolve: { todo_list: TodoResolver }},
  {path: 'todo-list/:id', canActivate: [AuthGuardService], component: TodoItemInfoComponent},
  {path: 'todo-list/:id/edit', canActivate: [AuthGuardService], component: TodoItemInfoEditComponent},
 // { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
