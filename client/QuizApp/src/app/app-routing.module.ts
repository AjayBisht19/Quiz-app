import { QuizAttemptComponent } from './quiz-attempt/quiz-attempt.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AddQuizComponent } from './admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';


const routes: Routes = [
  {path:':id',component:QuizAttemptComponent},
  {path:'',component:UserpageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
