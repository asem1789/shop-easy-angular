import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { User } from '../models';
import { UiService } from './ui.service';

const handleError = (err: any) => {
  let msg;
  switch (err.code) {
    case 'auth/email-already-in-use':
      msg = 'Sorry this email is already in use';
      break;
    case 'auth/user-not-found':
      msg = 'Cheack your Email and Password';
      break;
    case 'auth/wrong-password':
      msg = 'Cheack your Email and Password';
      break;
    case 'auth/weak-password':
      msg = 'Password should be at least 6 characters';
      break;
    default:
      msg = 'Something went Wrong';
      break;
  }

  return msg;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData = new Subject<User>();
  authChange = new Subject<boolean>();
  private userInfo!: User;
  private isAuth: boolean = false;

  constructor(
    private afstore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private uiService: UiService
  ) {}

  authListener() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.authSuccessfully(user);
      } else {
        this.authChange.next(false);
        this.isAuth = false;
        this.userData.next({ name: '', photo: '', id: '' });
      }
    });
  }

  login(email: string, password: string) {
    this.uiService.loadingChanged.next(true);
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.uiService.loadingChanged.next(false);
        this.router.navigate(['/products']);
      })
      .catch((err) => {
        this.uiService.loadingChanged.next(false);
        const errorMsg = handleError(err);
        this.uiService.errorStateChanged.next(errorMsg);
      });
  }

  signup(email: string, password: string, additionalData: any) {
    this.uiService.loadingChanged.next(true);
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        // #note: update userProfile, to Get updated data when use "this.afAuth.authState"
        // instead make another fetch to get userInfo from AngularFirestore
        this.afAuth.currentUser.then((currUser) => {
          currUser?.updateProfile(additionalData).then(() => {
            this.uiService.loadingChanged.next(false);
            // Update userDocument, with moreData if there are;
            this.createUserProfile(currUser);
          });
        });
      })
      .catch((err) => {
        this.uiService.loadingChanged.next(false);
        const errorMsg = handleError(err);
        this.uiService.errorStateChanged.next(errorMsg);
      });
  }

  googleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth
      .signInWithPopup(provider)
      .then(({ user }) => {
        this.createUserProfile(user);
      })
      .catch((err) => {
        console.log('erro GoogleAuth: ', err);
      });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.authChange.next(false);
      this.isAuth = false;
      this.router.navigate(['/login']);
    });
  }

  createUserProfile(userAuth: any) {
    const userRef = this.afstore.doc(`users/${userAuth.uid}`);
    userRef.get().subscribe((res: any) => {
      if (!res.exists) {
        console.log('createPrfoie: ', res.exists);
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        userRef.set({ displayName, email, createdAt });
      }
      this.authListener();
      this.router.navigate(['/products']);
    });
  }

  getUserInfo() {
    return this.userInfo;
  }

  isLoggin() {
    return this.isAuth;
  }

  private authSuccessfully(user: any) {
    const currUser = {
      id: user.uid,
      name: user.displayName ? user.displayName!.split(' ')[0] : '',
      photo: user.photoURL!,
    };
    this.authChange.next(true);
    this.isAuth = true;
    this.userInfo = currUser;
    this.userData.next(currUser);
  }
}
