import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;
    isAdmin: boolean = false;

    constructor(private router: Router) { }

    signupUser(email: string, password: string) {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);
                    email = firebase.auth().currentUser.email;
                    alert('Thank you for signing up ' + email);
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.router.navigate(['/']);
                    if(firebase.auth().currentUser.email === 'admin@andrias.kitchen') {
                        this.isAdmin = true;
                    }
                    console.log(firebase.auth().currentUser);
                    firebase.auth().currentUser.getIdToken().then(
                        (token: string) => this.token = token
                    )
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getIdToken().then(
            (token: string) => this.token = token
        );

        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    isAuthenticatedAdmin() {
        return this.token != null && this.isAdmin;
    }
}