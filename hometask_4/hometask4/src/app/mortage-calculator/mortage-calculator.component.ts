import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {combineLatest, fromEvent, map} from "rxjs";

@Component({
  selector: 'app-mortage-calculator',
  templateUrl: './mortage-calculator.component.html',
  styleUrls: ['./mortage-calculator.component.css']
})
export class MortageCalculatorComponent implements OnInit {

  @ViewChild('mortgageAmount', {static: true}) mortgageAmount!: ElementRef;
  @ViewChild('interest', {static: true}) interest!: ElementRef;
  @ViewChild('mortgageLength', {static: true}) mortgageLength!: ElementRef;
  @ViewChild('downPayment', {static: true}) downPayment!: ElementRef;

  expected: any;

  ngOnInit(): void {
    const interest$ = fromEvent(this.interest.nativeElement, "keyup").pipe(map((event: any) => parseFloat(event.target.value)))
    const mortgageAmount$ = fromEvent(this.mortgageAmount.nativeElement, "input").pipe(map((event: any) => parseFloat(event.target.value)))
    const mortgageLength$ = fromEvent(this.mortgageLength.nativeElement, "input").pipe(map((event: any) => parseFloat(event.target.value)))
    const downPayment$ = fromEvent(this.downPayment.nativeElement, "input").pipe(map((event: any) => parseFloat(event.target.value)))

    combineLatest([interest$, mortgageAmount$, mortgageLength$, downPayment$])
      .pipe(
        map(([interest, mortgageAmount, mortgageLength, downPayment]) => {
          return this.calculateMortgage(interest, mortgageAmount, mortgageLength, downPayment);
        }))
      .subscribe((amount) => {
        this.expected = amount;
      });
  }

  calculateMortgage = (interest_rate: number, mortgage_amount: number, mortgage_length: number, down_payment: number) => {
    const calculatedInterest = interest_rate / 1200;
    const sumToPay = mortgage_amount - down_payment
    const total = sumToPay * calculatedInterest / (1 - (Math.pow(1 / (1 + calculatedInterest), mortgage_length)));

    return total.toFixed(2);
  };



  onSubmit() {}

}
