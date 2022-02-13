import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {
  mapTo,
  scan,
  Subject,
  takeUntil,
  takeWhile,
  timer
} from "rxjs";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  time = 300;
  counter$ = timer(0, 1000);
  userClick=new Subject()

  ngOnInit(): void {}

  start() {
    this.counter$
      .pipe(
        mapTo(-1),
        scan((accummulator, current) => {
          return this.time = accummulator + current;
        }, this.time),
        takeWhile(_ => this.time > 0),
        takeUntil(this.userClick),
      )
      .subscribe(_ => {
        this.time
      });
  }

  reset() {
    this.userClick.next(this.time = 300)

  }
}


///////////// formatTime pipe //////////////////////
@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}

