import { AdminGuard } from './auth/admin.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListOrdersComponent } from './components/list-orders/list-orders.component';

const routes: Routes = [
  {
    path: 'list-orders', 
    component: ListOrdersComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }