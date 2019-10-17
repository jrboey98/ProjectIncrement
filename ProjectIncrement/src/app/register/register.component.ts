import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {}

  public register = {
    email: "",
    password: ""
  };

  public registerForm(){
    console.log(this.register);
    this.afAuth.auth.createUserWithEmailAndPassword(this.register.email, this.register.password)
                    .catch((error) => {
                      let errorCode = error.code;
                      let errorMessage = error.message;
                      console.log(errorCode + ": " + errorMessage);
                    })
  }
}
