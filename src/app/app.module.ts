import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { EarningsComponent } from './earnings/earnings.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmSignUpComponent } from './confirm-sign-up/confirm-sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopNavComponent,
    MainComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    ClientsComponent,
    AppointmentsComponent,
    EarningsComponent,
    LogoutComponent,
    AddClientComponent,
    ClientDetailComponent,
    ConfirmSignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'Home', component: MainComponent },
      { path: 'SignIn', component: LoginComponent },
      { path: 'Logout', component: LogoutComponent },
      { path: 'ForgottenPassword', component: ForgotPasswordComponent },
      { path: 'ForgottenPassword/:email/:token', component: ForgotPasswordComponent },
      { path: 'Appointments', component: AppointmentsComponent },
      { path: 'Clients', component: ClientsComponent },
      { path: 'AddClients', component: AddClientComponent },
      { path: 'ClientDetail', component: ClientDetailComponent },
      { path: 'Signup', component: SignupComponent },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'confirmSignUp', component: ConfirmSignUpComponent },
      { path: 'confirmSignUp/:email/:token', component: ConfirmSignUpComponent},
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: '**', redirectTo: 'Home', pathMatch: 'full' }
    ]),
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
