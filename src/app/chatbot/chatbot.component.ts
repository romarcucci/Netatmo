import { Component, OnInit, Injectable } from '@angular/core';
import { Question } from '../question';
import { Http, Response } from '@angular/http';
import {ViewChild} from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.sass']
})
export class ChatbotComponent implements OnInit {
 

  @ViewChild('questionsList') questionsList;
  
  stringSearch = '';
  answerSearch = 1;

  allQuestions = [];
  displayedQuestions = [];

  currentQuestion: Question = {
    asked: '',
    answer: 1,
    image: '',
  }

  constructor(private http: Http) {
    this.getAnswer();
  }

  ngOnInit(){
  }

  searchQuestions(){
    this.displayedQuestions = [];

    this.allQuestions.forEach(element => {
      if(element.asked.includes(this.stringSearch)){
        this.displayedQuestions.push(element);
      }
    });
  }

  saveQuestion(){
    if(this.currentQuestion.asked !== ''){
      this.getAnswer();

      this.allQuestions.push({
        asked: this.currentQuestion.asked,
        answer: this.currentQuestion.answer,
        image: this.currentQuestion.image
      });

      console.log(this.currentQuestion);

      this.stringSearch = '';
      this.answerSearch = 1;

      this.searchQuestions();

      this.currentQuestion = {
        asked: '',
        answer: 1,
        image: ''
      }
      this.autoScroll();
    }
    else{
      this.currentQuestion.asked = '';
    }
  }

  autoScroll(){
    this.questionsList.nativeElement.scrollTop = this.questionsList.nativeElement.scrollHeight;
  }

  getAnswer(){
    this.http.get('https://yesno.wtf/api').subscribe(
      (res: Response) => {
        const ans = res.json();
        switch(ans.answer){
          case 'yes': 
            this.currentQuestion.answer = 0;
            break;
          case 'no': 
            this.currentQuestion.answer = 2;
            break;
          default:
            break; 
        }
        this.currentQuestion.image = ans.image;
      }
    );
  }
}
