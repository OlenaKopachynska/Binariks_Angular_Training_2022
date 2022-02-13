import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.scss']
})

export class AddNewItemComponent implements OnInit {
  @Output() showList = new EventEmitter<boolean>();

  text: string | undefined;
  done: boolean = false;
  show: boolean = false;

  constructor(private toDoService: TodoService, private uiService: UiService) {
  }

  ngOnInit(): void {
    this.uiService.toggleAddForm$.subscribe(val => {
        this.show = val;
      }
    )
  }

  onFormSubmit() {

    if (!this.text) {
      alert("Please fill in text field");
      return;
    }

    const newToDo: any = {
      text: this.text,
      done: this.done
    }

    this.toDoService.addToDo(newToDo);

    this.showList.emit(true);

    this.uiService.toggleAddForm(false);
    this.uiService.toggleAddNewItemIcon(true)
    this.text = '';
  }


  ngOnDestroy() {
  }


}
