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
          Validators.minLength(3),
          Validators.pattern('^.*(?=.*\\d)(?=.*[a-zA-Z]).*$') // validation pattern :  at least 1 number and 1 letter
        ])
    }
  )

  onChange = (_: any) => {
  };

  public onTouched: () => void = () => {
  };

  get password() {
    return this.passwordForm.get('password')?.value;
  }

  ngOnInit(): void {
    this.passwordForm.valueChanges.subscribe(({password}) => {

      let regexNumbers = /^[0-9]+$/;   //only numbers
      let regexLetters = /^[a-zA-Z]+$/; // only letters upper and lowercase
      let regexLettersAndNumbers = /^[a-zA-Z0-9]+$/; // incorrect pattern (should be numbers AND letters) but in pair with formControl Validators.pattern('^.*(?=.*\\d)(?=.*[a-zA-Z]).*$') it works
      let regexLettersAndNumbersAndSpecialChar = /^(?=.*?[0-9])(?=.*?[a-zA-Z])(?=.*?[#?!@$%^&*-])/; //at least one letter, one number and one special character

      if (regexLetters.test(password)) {
        this.easy = "red";
        this.middle = "#DDD";
        this.strong = "#DDD"
      } else if (regexNumbers.test(password)) {
        this.easy = "red";
        this.middle = "#DDD";
        this.strong = "#DDD";
      } else if (regexLettersAndNumbers.test(password)) {
        this.easy = "orange"
        this.middle = "orange"
        this.strong = "#DDD"
      } else if (regexLettersAndNumbersAndSpecialChar.test(password)) {
        this.easy = "green";
        this.middle = "green";
        this.strong = "green"
      } else {
        this.easy = "#DDD"
        this.middle = "#DDD"
        this.strong = "#DDD"
      }
    })
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

  validate(_: AbstractControl): ValidationErrors | null {

    return this.passwordForm.valid ? null : {invalidForm: {valid: false, message: "password field is invalid"}};
  }


}


