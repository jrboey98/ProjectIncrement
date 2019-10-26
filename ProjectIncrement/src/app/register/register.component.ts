import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore,
              private router: Router) { }

  ngOnInit() {}

  public register = {
    email: "",
    password: "",
    confirmPassword: "",
    userHandle: ""
  };

  public registerForm(){
    console.log(this.register);
    if (this.register.password == this.register.confirmPassword) {
      this.afAuth.auth.createUserWithEmailAndPassword(this.register.email, this.register.password)
                    .then(
                      (user) => {
                        this.registerUser(user);
                      },
                      (error) => {
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        console.log(errorCode + ": " + errorMessage);
                      }
                    )
      
    } else {
      console.log("Passwords do not match."); //change to an on screen message
    }
  }

  private registerUser(user: auth.UserCredential) {
    this.afs.collection('users').doc(user.user.uid).set({
      email: this.register.email,
      userHandle: this.register.userHandle
    }).then(() => {
      console.log("User created successfully");
      this.router.navigate(['login']);
    }).catch((error) => {
      console.log("User registration failed: " + error);
    });
  }
}
