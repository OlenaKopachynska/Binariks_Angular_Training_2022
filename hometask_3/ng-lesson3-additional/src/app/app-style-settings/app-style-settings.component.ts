import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-app-style-settings',
  templateUrl: './app-style-settings.component.html',
  styleUrls: ['./app-style-settings.component.css']
})
export class AppStyleSettingsComponent implements OnInit {
  @Input()  size?: number;
  @Output() sizeChange = new EventEmitter<number>();
  @Input()  class?: string;
  @Output() classChange = new EventEmitter<string>();

  settings = {
    "fontSize": 12,
    "className": "primary",
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  changeStyle() {
    this.sizeChange.emit(this.settings.fontSize);
    this.classChange.emit(this.settings.className);
  }
}
