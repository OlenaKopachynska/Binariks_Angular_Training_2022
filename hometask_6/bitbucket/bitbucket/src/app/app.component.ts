import {Component, OnInit} from '@angular/core';
import {UiService} from "./services/ui.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bitbucket';
  showAccLink: any;

  constructor(private _uiService: UiService) {
  }

  ngOnInit() {
    this._uiService.showAccountIcon$.subscribe(val => this.showAccLink = val)
  }

}
