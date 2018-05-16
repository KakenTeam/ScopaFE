import { DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { ClickOutsideModule } from 'ng-click-outside';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';
import { OrdersService } from './components/orders.service';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DateTimeViPipe } from './pipes/date-time-vi.pipe';
import { VndPipe } from './pipes/vnd.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ListOrdersComponent,
    DateTimeViPipe,
    VndPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    AuthService,
    OrdersService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
