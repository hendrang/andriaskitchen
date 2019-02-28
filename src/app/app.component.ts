import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Andria's Kitchen";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAP6ArdH-nx-On-FbvDPprsSJ7oFMuSFBQ",
      authDomain: "andriaskitchen-ak1.firebaseapp.com"
    });
  }
}
