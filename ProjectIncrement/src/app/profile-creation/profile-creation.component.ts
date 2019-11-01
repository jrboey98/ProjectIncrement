import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile-creation',
  templateUrl: './profile-creation.component.html',
  styleUrls: ['./profile-creation.component.scss'],
})
export class ProfileCreationComponent implements OnInit {

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth,
              private router: Router) { }

  ngOnInit() {}

  private creation = {
    username: "",
    motto: ""
  }

  public profileCreationForm() {
    this.afs.collection('users').doc(this.afAuth.auth.currentUser.uid).update({
      username: this.creation.username,
      motto: this.creation.motto,
      highScore: 0,
      totalPosts: 0,
      allTimeScore: 0,
      followers: [],
      following: [],
      totalTime: 0
    }).then(() => {
      console.log("User updated successfully");
      this.router.navigate(['']);
    }).catch((error) => {
      console.log("User update failed: " + error);
    });
  }

}
