import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})

export class DateComponent implements OnInit {
  public today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
