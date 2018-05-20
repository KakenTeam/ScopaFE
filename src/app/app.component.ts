import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from './auth/auth.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import '../assets/js/jquery.dataTables.bootstrap.js';
import '../assets/js/jquery.dataTables.js';
import { Router } from '@angular/router';
import { User } from './components/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public userLogged$ = new BehaviorSubject(false);

  constructor(
    public toastr: ToastsManager, 
    vcr: ViewContainerRef,
    public authService: AuthService,
    private router: Router
  ) {
    this.authService.userSignedIn$.subscribe(data => this.userLogged$.next(data));
    this.toastr.setRootViewContainerRef(vcr);
    this.authService.validateUser().subscribe(res => {
      this.authService.currentUserData = res as User;
      this.authService.userSignedIn$.next(true);
    },
      err => {
        console.log("Failed");
        this.authService.userSignedIn$.next(false);
        this.router.navigate(["/login"]);
      })
  }

  ngOnInit() {
  }
}
