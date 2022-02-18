import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
todoArr: any;
  completed: any;
  uncompleted: any;
  currentUser: any
  BtnConfig = {
    styles: {
      width: '193px'
    },
    btn_title: 'Add item'
  }

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.todoArr = this.route.snapshot.data['todo_list']
    this.completed = this.route.snapshot.data['todo_list'].filter((todo: any) => todo.done);
    this.uncompleted = this.route.snapshot.data['todo_list'].filter((todo: any) => !todo.done);
    this.currentUser = this.userService.getCurrentUser()
  }

  onLogout() {
    this.userService.logout()
  }

}
