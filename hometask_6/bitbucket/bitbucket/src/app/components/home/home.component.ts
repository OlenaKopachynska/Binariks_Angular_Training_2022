import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser!: any;

  BtnConfig = {
    styles: {
      width: '365px'
    },
    btn_title: 'Add new item'
  }

  constructor(private userService: UserService, private _uiService: UiService) {
    this.currentUser = this.userService.getCurrentUser()
    this._uiService.showAccountIcon(true)
  }

  ngOnInit(): void {}

}
