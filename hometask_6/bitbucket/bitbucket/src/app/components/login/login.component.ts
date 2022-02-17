import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoService} from "../../services/todo.service";
import {UserService} from "../../services/user.service";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  currentUser!: any

  constructor(private _activatedroute: ActivatedRoute,
              private router: Router,
              private _todoService: TodoService,
              private _userService: UserService,
              private _uiService: UiService) {
  }

  ngOnInit() {

    this.currentUser = this._userService.getCurrentUser()
    if (!this.currentUser) {
      this._uiService.showAccountIcon(false)

      this.loginForm = new FormGroup({
        Username: new FormControl('', [Validators.required]),
        Password: new FormControl('', [Validators.required])
      });
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
     this._userService.login(this.loginForm.value)

    } else {
      alert(' form is not valid!!')
    }
  }

}
