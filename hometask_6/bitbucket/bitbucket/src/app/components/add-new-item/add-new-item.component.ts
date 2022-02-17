import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {UiService} from "../../services/ui.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})

export class AddNewItemComponent implements OnInit {

  @Output() addedNew = new EventEmitter<boolean>();

  id: number = 0;
  text: string | undefined;
  done: boolean = false;
  createdAt: any = new Date();
  show!: boolean;

  constructor(private toDoService: TodoService,
              private router: Router,
              private route: ActivatedRoute,
              private _uiService: UiService ) {
  }

  ngOnInit() {
    this._uiService.toggleAddForm$.subscribe(val => this.show = val);
  }

  onFormSubmit() {

    if (!this.text) {
      alert("Please fill in text field");
      return;
    }

    const newToDo: any = {
      id: this.id + 1,
      text: this.text,
      done: this.done,
      createdAt: this.createdAt
    }

    this.toDoService.addToDo(newToDo);
    this.text = '';
    this.router.navigate(['/todo-list']);
    this.addedNew.emit(true);
  }

  onFormCancel() {
    this._uiService.toggleAddForm(false)  }
}
