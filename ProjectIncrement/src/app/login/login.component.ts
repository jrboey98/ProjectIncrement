import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {}

  public login = {
    email: "",
    password: ""
  };

  public loginForm() {
    console.log(this.login);
    this.afAuth.auth.signInWithEmailAndPassword(this.login.email, this.login.password)
                    .catch((error) => {
                      let errorCode = error.code;
                      let errorMessage = error.messgae;
                      if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                      } else {
                        alert(errorMessage);
                      }
                      console.log(error);
                    })
  }

  public Logout() {
    this.afAuth.auth.signOut();
  }

}
