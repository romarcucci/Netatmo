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
 
  constructor(private http: Http) {
    this.getAnswer();
  }

  @ViewChild('questionsList') questionsList;

  stringSearch = '';
  answerSearch = 'all';

  allQuestions = [];
  displayedQuestions = [];

  question: Question = {
    asked: '',
    answer: '',
    image: '',
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
    if(this.question.asked !== '\n'){
      this.getAnswer();

      this.allQuestions.push({
        asked: this.question.asked,
        answer: this.question.answer,
        image: this.question.image
      });

      this.stringSearch = '';
      this.answerSearch = 'all';

      this.searchQuestions();

      this.questionsList.nativeElement.scrollTop = this.questionsList.nativeElement.scrollHeight;

      this.question = {
        asked: '',
        answer: '',
        image: ''
      }
    }
    else{
      this.question.asked = '';
    }
  }

  getAnswer(){
    this.http.get('https://yesno.wtf/api').subscribe(
      (res: Response) => {
        const ans = res.json();
        this.question.answer = ans.answer;
        this.question.image = ans.image;
      }
    );
  }
}
