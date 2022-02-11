import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task02',
  templateUrl: './task02.component.html',
  styleUrls: ['./task02.component.scss']
})
export class Task02Component implements OnInit {

  public isBtn = true;
  public inputWrong1 = false;
  public inputWrong2 = false;
  public inputWrong3 = false;
  public userIndex!: number;
  public user = {
    login: '',
    password: '',
    email: ''
  };
  public regExp = {
    login: /^[\w_\-.]{4,20}$/,
    password: /^[\w_\-.\S]{4,20}$/,
    email: /^[a-z0-9_\-.]+@[a-z.]+\.[a-z]+$/
  }
  public usersArray: Array<{
    login: string, 
    password: string, 
    email: string
  }> = [];
  // * usersArray for testing
  // public usersArray = [
  //   {
  //     login: 'ivan',
  //     password: '12345',
  //     email: 'ii@gmail.com'
  //   },
  //   {
  //     login: 'petro',
  //     password: 'qwerty',
  //     email: 'pp@gmail.com'
  //   },
  //   {
  //     login: 'pavlo',
  //     password: 'asdfgh',
  //     email: 'pav@gmail.com'
  //   },
  //   {
  //     login: 'marika',
  //     password: '7777777',
  //     email: 'mm@gmail.com'
  //   },
  //   {
  //     login: 'raduga',
  //     password: 'raduga',
  //     email: 'ra@gmail.com'
  //   },
  //   {
  //     login: 'dima',
  //     password: '54321',
  //     email: 'dd@gmail.com'
  //   }
  // ];

  constructor() { }

  ngOnInit(): void {
  }

  // * add new user into usersArray
  addUser(): void {
    if(!this.checkInputs()) {
      return;
    }
    this.usersArray.push(this.createNewUser());
    this.clearInputs();
  }

  // * check inputs
  checkInputs(): boolean {
    if(!this.regExp.login.test(this.user.login)) {
      this.inputWrong1 = true;
      return false;
    }
    else {
      this.inputWrong1 = false;
    }
    if(!this.regExp.password.test(this.user.password)) {
      this.inputWrong2 = true;
      return false;
    }
    else {
      this.inputWrong2 = false;
    }
    if(!this.regExp.email.test(this.user.email)) {
      this.inputWrong3 = true;
      return false;
    }
    else {
      this.inputWrong3 = false;
    }
    return true;
  }

  // * create new user with data from inputs
  createNewUser() {
    return {
      login: this.user.login,
      password: this.user.password,
      email: this.user.email
    };
  }

  // * clear input fields
  clearInputs():void {
    this.user.login = '';
    this.user.password = '';
    this.user.email = '';
  }

  // * delete user from usersArray
  deleteUser(index: number): void {
    this.usersArray.splice(index, 1);
  }

  // * get data of user for editing
  editUser(index: number): void {
    this.isBtn = false;
    this.user.login = this.usersArray[index].login;
    this.user.password = this.usersArray[index].password;
    this.user.email = this.usersArray[index].email;
    this.userIndex = index;
  }

  // * save edit data of user
  saveEditUser(): void {
    if(!this.checkInputs()) {
      return;
    }
    this.usersArray[this.userIndex] = this.createNewUser();
    this.isBtn = true;
    this.clearInputs();
  }

}
