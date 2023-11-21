import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUserNames = ['Admin', 'SpecialUser']
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forbiddenNamesFunc.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
    })
  }

  onSubmit() {
    console.log(this.signupForm)
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  forbiddenNamesFunc(control: FormControl): {[s: string]: boolean} | null {
    if(this.forbiddenUserNames.indexOf(control.value)) {
      return {'nameIsForbidden': true}
    }
    return null;
  }
}
