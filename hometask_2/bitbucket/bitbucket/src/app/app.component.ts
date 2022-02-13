import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bitbucket';

  showList: boolean | undefined;

  childEventClicked(val: boolean): void {
    this.showList = val;
  }
}
