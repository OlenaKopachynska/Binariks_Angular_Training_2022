import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/header/header.component';
import { DateComponent } from './components/date/date.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import {AddNewItemComponent} from "./components/add-new-item/add-new-item.component";
import { AddNewItemButtonComponent } from './components/add-new-item-button/add-new-item-button.component';
import { AddNewItemIconComponent } from './components/add-new-item-icon/add-new-item-icon.component';
import { CrossedTextDirective } from './directives/crossed-text.directive';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { CreateNewTodoComponent } from './components/create-new-todo/create-new-todo.component';
import { TodoItemInfoComponent } from './components/todo-item-info/todo-item-info.component';
import { TodoItemInfoEditComponent } from './components/todo-item-info-edit/todo-item-info-edit.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {TodoService} from "./services/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    HeaderComponent,
    DateComponent,
    AddNewItemComponent,
    AddNewItemButtonComponent,
    AddNewItemIconComponent,
    CrossedTextDirective,
    LoginComponent,
    AccountComponent,
    HomeComponent,
    CreateNewTodoComponent,
    TodoItemInfoComponent,
    TodoItemInfoEditComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule

  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
