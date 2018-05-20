import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  remember = false;
  isLoading = false;

  @Output() onFormResult = new EventEmitter<any>();

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.authService.userSignedIn$.next(false);
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required
      ])],
      remember: [false]
    });
  }

  submit(value: any) {
    this.toggleLoading();
    this.authService.login(value.email, value.password)
      .subscribe(
        (res) => {
            this.onFormResult.emit({ signedIn: true, res });
            this.isLoading = false;
            this.authService.userSignedIn$.next(true);
            localStorage.setItem("user_id", res._id);
            this.router.navigate(["/list-orders"]);
        },
        err => {
          console.log(err);
        }
      );
  }

  afterFailedLogin(errors: any) {
    const parsed_errors = JSON.parse(errors._body).messsage;
    for (const attribute in this.loginForm.controls) {
      if (parsed_errors[attribute]) {
        this.loginForm.controls[attribute].setErrors(parsed_errors[attribute]);
      }
    }
    this.loginForm.setErrors(parsed_errors);
  }

  private toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
