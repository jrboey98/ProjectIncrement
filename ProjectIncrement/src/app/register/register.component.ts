import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  public register = {};

  public registerForm(){
    console.log(this.register);
  }
}
