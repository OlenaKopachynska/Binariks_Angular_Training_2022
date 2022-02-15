import {Component, OnInit, forwardRef} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR, ValidationErrors,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true
    }
  ],
})
export class PasswordComponent implements OnInit, ControlValueAccessor, Validators {
  easy: string = "#DDD";
  middle: string = "#DDD";
  strong: string = "#DDD";


  passwordForm: FormGroup = new FormGroup(
    {
      password: new FormControl('',
        [Validators.required,
          // Validators.minLength(3),
        ])
    }
  )

  onChange = (value: any) => {
  };

  public onTouched: () => void = () => {
  };

  get password() {
    return this.passwordForm.get('password')?.value;
  }

  ngOnInit(): void {

  }

  registerOnChange(fn: any): void {
    this.passwordForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    value && this.passwordForm.setValue(value);
  }

  inputChanges(pass: any) {

    let regexNumbers = /^[0-9]+$/;
    let regexLetters = /^[a-zA-Z]+$/;
    let regexLettersAndNumbers = /^[a-zA-Z0-9]+$/;
    let regexLettersAndNumbersAndSpecialChar = /^(?=.*?[0-9])(?=.*?[a-zA-Z])(?=.*?[#?!@$%^&*-])/;

    if (regexLetters.test(pass)) {
      this.easy = "red";
      this.middle = "#DDD";
      this.strong = "#DDD";
    } else if (regexNumbers.test(pass)) {
      this.easy = "red";
      this.middle = "#DDD";
      this.strong = "#DDD";
    } else if (regexLettersAndNumbers.test(pass)) {
      this.easy = "orange"
      this.middle = "orange"
      this.strong = "#DDD"
    } else if (regexLettersAndNumbersAndSpecialChar.test(pass)) {
      this.easy = "green";
      this.middle = "green";
      this.strong = "green"
    } else {
      this.easy = "#DDD"
      this.middle = "#DDD"
      this.strong = "#DDD"
    }

  }

  validate(c: AbstractControl): ValidationErrors | null {

    return this.passwordForm.valid ? null : {invalidForm: {valid: false, message: "password field is invalid"}};
  }


}


