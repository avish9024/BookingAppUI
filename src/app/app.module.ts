import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule, MatDividerModule, MatCheckboxModule, MatSliderModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HotelComponent } from './hotel/hotel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelListpageComponent } from './hotel-listpage/hotel-listpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HotelComponent,
    AdminPanelComponent,
    CardDialogComponent,
    UserListPageComponent,
    HotelCardComponent,
    HotelListpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule, 
    CommonModule,
    SharedModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    CommonModule,
    MatSliderModule,
    MatCommonModule,
    MatSliderModule,
    MatCardModule,
    SharedModule,
    MatGridListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatCardModule,
    MatSliderModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
