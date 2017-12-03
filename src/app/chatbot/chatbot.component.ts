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
  answerSearch = 'all';

  allQuestions = [];
  displayedQuestions = [];

  question: Question = {
    asked: '',
    answer: '',
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
    if(this.question.asked !== ''){
      this.getAnswer();

      this.allQuestions.push({
        asked: this.question.asked,
        answer: this.question.answer,
        image: this.question.image
      });

      this.stringSearch = '';
      this.answerSearch = 'all';

      this.searchQuestions();

      this.question = {
        asked: '',
        answer: '',
        image: ''
      }
      this.autoScroll();
    }
    else{
      this.question.asked = '';
    }
  }

  autoScroll(){
    this.questionsList.nativeElement.scrollTop = this.questionsList.nativeElement.scrollHeight;
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
