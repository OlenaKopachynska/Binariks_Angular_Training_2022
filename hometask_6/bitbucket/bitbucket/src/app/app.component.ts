import {Component, OnInit} from '@angular/core';
import {UiService} from "./services/ui.service";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bitbucket';
  showAccLink: any;

  constructor(private _uiService: UiService, private uService: UserService) {
  }

  ngOnInit() {
    let u = this.uService.getCurrentUser()
    if (u) {
      this._uiService.showAccountIcon(true)

    } else {

      this._uiService.showAccountIcon(false)
    }

    this._uiService.showAccountIcon$.subscribe(val => this.showAccLink = val)

  }

}
