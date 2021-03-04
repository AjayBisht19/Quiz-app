import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from "./admin/admin.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { UserpageComponent } from './userpage/userpage.component';
import { QuizAttemptComponent } from './quiz-attempt/quiz-attempt.component';


@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    QuizAttemptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
