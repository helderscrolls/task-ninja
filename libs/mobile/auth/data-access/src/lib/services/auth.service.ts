import { Injectable } from '@angular/core';
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private firestore: Firestore) {}

  async signUp(
    email: string,
    password: string,
    username: string
  ): Promise<UserCredential | null> {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      const uid = user.user.uid;
      const userDocRef = doc(this.firestore, `users/${uid}`);

      await setDoc(userDocRef, {
        username,
      });

      await updateProfile(user.user, { displayName: username });

      return user;
    } catch (e) {
      return null;
    }
  }

  async signIn(
    email: string,
    password: string
  ): Promise<UserCredential | null> {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);

      return user;
    } catch (e) {
      return null;
    }
  }

  signOut(): Promise<void> {
    return signOut(this.auth);
  }
}
