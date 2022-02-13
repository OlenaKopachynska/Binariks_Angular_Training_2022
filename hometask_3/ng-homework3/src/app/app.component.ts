import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public shouldShow = true;

  @ViewChildren('body') bodyElements!: QueryList<ElementRef>;

  toggleChild() {
    this.shouldShow = !this.shouldShow;

    this.bodyElements.toArray().forEach(div => {
      console.log(div)

      if(this.shouldShow) {
        div.nativeElement.classList.add("show");
        div.nativeElement.classList.remove("hide");
      } else {
        div.nativeElement.classList.add("hide");
        div.nativeElement.classList.remove("show");
      }
    })
  }
}
