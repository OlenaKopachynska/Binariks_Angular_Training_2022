import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/header/header.component';
import { DateComponent } from './components/date/date.component';
import {FormsModule} from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import {AddNewItemComponent} from "./components/add-new-item/add-new-item.component";
import { AddNewItemButtonComponent } from './components/add-new-item-button/add-new-item-button.component';
import { AddNewItemIconComponent } from './components/add-new-item-icon/add-new-item-icon.component';
import { CrossedTextDirective } from './directives/crossed-text.directive';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
