import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUserNames = ['Admin', 'SpecialUser']
  signupForm!: FormGroup;

  // constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenNamesFunc.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], [this.AsyncForbiddenNames]),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    })
    // Useful Observables
    // this.signupForm.valueChanges.subscribe((value) => console.log(value))
    // this.signupForm.statusChanges.subscribe((status) => console.log(status))
  }

  onSubmit() {
    console.log(this.signupForm)
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  forbiddenNamesFunc(control: FormControl): {[s: string]: boolean} | null {
    if(this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    }
    return null;
  }

  // stimulate async validator
  AsyncForbiddenNames(control: AbstractControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true})
        } else {
          resolve(null)
        }
      }, 1500)
    })
  }
}
