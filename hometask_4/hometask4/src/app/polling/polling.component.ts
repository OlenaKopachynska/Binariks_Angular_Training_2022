import { Component, OnInit } from '@angular/core';
import { interval, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.css']
})
export class PollingComponent implements OnInit {
  imagePath:any;

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    interval(5000).pipe(
      switchMap(() => this.HttpClient.get('https://random.dog/woof.json')))
      .subscribe((result: any) => {
        this. imagePath = result.url
      //console.log('Result: ' + JSON.stringify(result));
    })
  }

}
