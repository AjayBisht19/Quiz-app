import { ActivatedRoute } from '@angular/router';
import { QuizsService } from './../quizs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-attempt',
  templateUrl: './quiz-attempt.component.html',
  styleUrls: ['./quiz-attempt.component.css']
})
export class QuizAttemptComponent implements OnInit {

  constructor(private quizService:QuizsService,private router:ActivatedRoute) { }
  questions:{}
  ngOnInit(): void {
    this.quizService.getquestions(this.router.snapshot.params.id).subscribe((qs)=>{
      this.questions=qs;
    })
     
  }

  check(){
    console.log(this.questions)
  }
}

