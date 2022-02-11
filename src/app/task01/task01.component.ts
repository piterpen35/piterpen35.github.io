import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task01',
  templateUrl: './task01.component.html',
  styleUrls: ['./task01.component.scss']
})
export class Task01Component implements OnInit {

  public arrBadList = ['java', 'tottenham'];
  public isEmpty1 = false;
  public setBadWord = '';
  public placeholderInput = 'word here..';
  public isEmpty2 = false;
  public textField = '';
  public placeholderArea = 'text here..';

  constructor() { }

  ngOnInit(): void {
  }

  showBadList(): string {
    return this.arrBadList.join(', ');
  }

  addToBadList(): void {
    if(this.setBadWord) {
      this.arrBadList.push(this.setBadWord.toLowerCase());
      this.clearInput();
    }
    else {
      this.isEmpty1 = true;
      this.placeholderInput = 'Please write a word!';
    }
  }

  clearInput():void {
    this.isEmpty1 = false;
    this.placeholderInput = 'word here..';
    this.setBadWord = '';
  }

  resetBadList(): void {
    this.arrBadList = [];
    this.clearInput();
    this.clearArea();
  }

  clearArea():void {
    this.isEmpty2 = false;
    this.placeholderArea = 'text here..';
    this.textField = '';
  }

  checkTextField(): void {
    if(this.textField) {
      this.isEmpty2 = false;
      this.editText();
    }
    else {
      this.isEmpty2 = true;
      this.placeholderArea = 'Please write a text!';
    }
  }

  editText(): void {
    let text = this.textField.split(' ');
    this.arrBadList.map(bad => {
      text = text.map(word => (word.toLowerCase() === bad) 
        ? word = word.split('').map(letter => letter = '*').join('') 
        : word)
    })
    this.textField = text.join(' ');
  }

}
