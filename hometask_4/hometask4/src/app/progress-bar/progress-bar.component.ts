import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent implements OnInit {
  @ViewChild('progresscontainer', {static: true}) progresscontainer!: ElementRef;
  @ViewChild('progbar', {static: true}) progbar!: ElementRef;

  ngOnInit() {
    fromEvent(this.progresscontainer.nativeElement, 'scroll')
      .subscribe((e: any) => {

        const winScroll = e.target["scrollTop"];
        const height = e.target["scrollHeight"] - e.target["clientHeight"];
        const res = (winScroll / height) * 100

        this.progbar.nativeElement.style.width = res + "%"
      })
  }
}
