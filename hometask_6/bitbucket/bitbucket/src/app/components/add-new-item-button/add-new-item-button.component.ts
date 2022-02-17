import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-new-item-button',
  templateUrl: './add-new-item-button.component.html',
  styleUrls: ['./add-new-item-button.component.scss']
})
export class AddNewItemButtonComponent implements OnInit {
  @Input() buttonConfig: any;

  ngOnInit(): void {
  }

}
