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
 
  @ViewChild('questionsList') questionsList; //HTML element displaying the questions
  
  stringSearch = ''; // String in the search text input
  answerSearch = 1; // Value of the search range input (0:yes, 1:all, 2:no)

  allQuestions = []; // List of all the questions
  displayedQuestions = []; // List of the questions that we display

  // Current question in the bottom text input
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

  // Filter for search text input
  searchQuestions(){
    // We empty the list of displayed questions
    this.displayedQuestions = [];

    // Then  we fill it with all the questions containing the text input
    this.allQuestions.forEach(element => {
      if(element.asked.includes(this.stringSearch)){
        this.displayedQuestions.push(element);
      }
    });
  }

  // Adding question from the bottom text input
  saveQuestion(){
    // We check that the input is not empty
    if(this.currentQuestion.asked !== ''){
      // We get the answer and image through the yesno api
      this.getAnswer();

      // We add the question to the list of all questions
      this.allQuestions.push({
        asked: this.currentQuestion.asked,
        answer: this.currentQuestion.answer,
        image: this.currentQuestion.image
      });

      // We set the search fields back to default
      this.stringSearch = '';
      this.answerSearch = 1;

      // We call this method so that the question is added to the displayed question list
      this.searchQuestions();

      // We set the current question back to default
      this.currentQuestion = {
        asked: '',
        answer: 1,
        image: ''
      }
    }
  }

  // Set the scroll bar to the bottom of the question list so that we can see the last questions
  autoScroll(){
    this.questionsList.nativeElement.scrollTop = this.questionsList.nativeElement.scrollHeight;
  }

  // Call the yes no api and set answer and image to the current question
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
