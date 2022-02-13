import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortageCalculatorComponent } from './mortage-calculator.component';

describe('MortageCalculatorComponent', () => {
  let component: MortageCalculatorComponent;
  let fixture: ComponentFixture<MortageCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortageCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
