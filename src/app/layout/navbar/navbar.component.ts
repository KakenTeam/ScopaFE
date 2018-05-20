import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: "[navbar]",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  username: string;
  @ViewChild("button_sidebar") btnSidebar: ElementRef;
  status = false; // true mean open sidebar

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
  
  }

  ngAfterViewInit() {
    this.getUsername();
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (this.btnSidebar.nativeElement.classList.contains("display")) {
          let el: HTMLElement = this.btnSidebar.nativeElement as HTMLElement;
          el.click();
        }
      }
    });
  }

  toogleBtnSidebar() {
    this.status = !this.status;
  }

  getUsername(): string {
    // if (this.authService.currentUserData) {
    //   return this.authService.currentUserData.name;
    // }
    return "Thuan";
  }

  isLoggedIn(): boolean {
    return true;
  }

  isLoggedOut(): boolean {
    return false;
  }

  logOut() {
    localStorage.removeItem("user_id");
    this.router.navigate(["/login"]);
  }
}
