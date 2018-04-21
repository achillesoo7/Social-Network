import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  //object for log in user
  logUser = {
    email: '',
    password: ''
  };

  //Alert messages for login validation
  emailAlert = "";
  passwordAlert = "";

  //object for register user
  registerUser = {
   firstName: "",
   lastName: "",
   email: "",
   password: "",
   rePassword: "",
  }

  // Alert messages for register form
  firstNameAlert = "";
  lastNameAlert = "";
  signEmailAlert = "";
  signPasswordAlert = "";
  rePasswordAlert = "";

  changeFormMsg = "Dont have an account?";
  logInForm = true;
  signUpForm = false;
  constructor(
    public dataService: DataService,
    public router:Router
    ) {
  }

  //Log in form validation

  onLogSubmit(e) {
    if (this.logUser.email === "") {
      this.emailAlert = "Email is required";

    }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.logUser.email) === false){
      this.emailAlert = "Email is not valid";
    }
    else if (this.logUser.password === '') {
      this.emailAlert = "";
      this.passwordAlert = "Please enter your password";
    }else {
      this.logInForm = false;
      this.logUser.email = this.logUser.email;
      this.logUser.password = this.logUser.password;
      this.router.navigate(['/dashboard']);
      console.log(this.logUser);
    }
  }

  //Sign Up form validation

  onSignSubmit(){
    if(this.registerUser.firstName === ""){
       this.firstNameAlert = "Please enter your first name";
    }else if(this.registerUser.lastName === ""){
      this.firstNameAlert = "";
      this.lastNameAlert = "Please enter your last name";
    }else if(this.registerUser.email === ""){
      this.firstNameAlert = "";
      this.lastNameAlert = "";
      this.signEmailAlert = "Please enter your email..";
    }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.registerUser.email) === false){
      this.firstNameAlert = "";
      this.lastNameAlert = "";
      this.signEmailAlert = "Email is not valid";
    }else if(this.registerUser.password === ""){
      this.firstNameAlert = "";
      this.lastNameAlert = "";
      this.signEmailAlert = "";
      this.signPasswordAlert = "Please enter your password";
    }else if(this.registerUser.rePassword === ""){
      this.firstNameAlert = "";
      this.lastNameAlert = "";
      this.signEmailAlert = "";
      this.signPasswordAlert = "";
      this.rePasswordAlert = "Please enter your password again";
    }else if(this.registerUser.password !== this.registerUser.rePassword){
      this.firstNameAlert = "";
      this.lastNameAlert = "";
      this.signEmailAlert = "";
      this.signPasswordAlert = "";
      this.rePasswordAlert = "Password do not matched...";
    }else{
      this.router.navigate(['/dashboard']);
      console.log(this.registerUser);
    }
  }

  //Changin the form based on user click or behaviour

  changeForm(){
    if (this.logInForm){
    this.logInForm = false;
    this.signUpForm = true;
    this.changeFormMsg = "Already have an account!";
  }else{
    this.logInForm = true;
    this.signUpForm = false;
    this.changeFormMsg = "Don't have an account?";
  }
  }
  ngOnInit() {
  }

}
