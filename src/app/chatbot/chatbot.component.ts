import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  searchString = '';

  questions = [];
  
  question: Question = {
    asked: '',
    answer: ''
  }

  constructor() {}

  ngOnInit() {
  }

  searchQuestions(){
    console.log(this.searchString);
  }

  saveQuestion(){
    this.question.answer = 'no';
    this.questions.push({
      asked: this.question.asked,
      answer: this.question.answer
    });
    this.question.asked = '';
    this.question.answer = '';
  }
}
