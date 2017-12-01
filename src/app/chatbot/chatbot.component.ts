import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.sass']
})
export class ChatbotComponent implements OnInit {

  searchString = '';
  searchAnswer = 'all';

  allQuestions = [];
  displayedQuestions = [];
  
  question: Question = {
    asked: '',
    answer: ''
  }

  constructor() {}

  ngOnInit() {
  }

  searchQuestions(){
    this.displayedQuestions = [];
    this.allQuestions.forEach(element => {
      if(element.asked.includes(this.searchString)){
        this.displayedQuestions.push(element);
      }
    });
  }

  saveQuestion(){
    if(this.question.asked !== ''){
      this.searchString = '';
      this.searchAnswer = 'all';
      this.question.answer = 'no';
      this.allQuestions.push({
        asked: this.question.asked,
        answer: this.question.answer
      });
      this.searchQuestions();
      this.question.asked = '';
      this.question.answer = '';
    }
  }
}
