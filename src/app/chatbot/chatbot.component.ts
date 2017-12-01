import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor() { }

  question: Question = {
    asked: '',
    answer: ''
  }

  ngOnInit() {
  }

}
