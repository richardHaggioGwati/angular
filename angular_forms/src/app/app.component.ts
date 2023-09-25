import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Selecting form with view-child
  @ViewChild('f') signForm: NgForm | undefined;
  defaultOption = "pet"
  answer = ""
  genders = ["male", "female"]
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: ""
  }
  submitted = false

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signForm?.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ""
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    this.signForm?.form.patchValue({
      userData: {
        username: suggestedName
      }
    })

  }

  onSubmit() {
    this.submitted = true
    this.user.username = this.signForm?.value.userData.username
    this.user.email = this.signForm?.value.userData.email
    this.user.secretQuestion = this.signForm?.value.secret
    this.user.answer = this.signForm?.value.questionAnswer
    this.user.gender = this.signForm?.value.gender

    //Reset all values including classes
    this.signForm?.reset();
  }

}
