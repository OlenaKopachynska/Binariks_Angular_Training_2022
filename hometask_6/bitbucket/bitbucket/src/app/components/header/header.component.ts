import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() parentData: any;
  showAccLink!: boolean;
  userLetter!: any

  constructor(private _userService: UserService, private _uiService: UiService) {
  }

  ngOnInit(): void {
    this._uiService.showAccountIcon$.subscribe(val => this.showAccLink = val)
  }

  ngOnChanges(_: SimpleChanges) {
    let user = this._userService.getCurrentUser()
    if (user) this.userLetter = user.Username.charAt(0).toUpperCase()
  }
}
