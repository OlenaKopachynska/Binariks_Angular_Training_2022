import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {FormatTimePipe, TimerComponent} from './timer/timer.component';
import { PollingComponent } from './polling/polling.component';
import {HttpClientModule} from "@angular/common/http";
import { MortageCalculatorComponent } from './mortage-calculator/mortage-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    TimerComponent,
    FormatTimePipe,
    PollingComponent,
    MortageCalculatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
