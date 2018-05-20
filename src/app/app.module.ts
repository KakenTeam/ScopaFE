import { AdminGuard } from './auth/admin.guard';
import { DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataTablesModule } from 'angular-datatables';
import { ClickOutsideModule } from 'ng-click-outside';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';
import { OrdersService } from './components/orders.service';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DateTimeViPipe } from './pipes/date-time-vi.pipe';
import { VndPipe } from './pipes/vnd.pipe';
import { ToastrService } from './components/toastr.service';
import { LoggedInGuard } from './logged-in.guard';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ListOrdersComponent,
    DateTimeViPipe,
    VndPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ClickOutsideModule,
    HttpClientModule,
    DataTablesModule,
    ToastModule.forRoot()
  ],
  providers: [
    AuthService,
    OrdersService,
    DatePipe,
    ToastrService,
    AdminGuard,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
