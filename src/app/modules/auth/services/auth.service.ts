import { Injectable, inject } from "@angular/core";
import { Auth, getAuth, signInWithEmailAndPassword } from "@angular/fire/auth";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { Observable, from } from "rxjs";

@Injectable({
    providedIn:'root',
})
export class AuthService {

    constructor(private firebaseAuth: Auth) {}
    // firebaseAuth = inject(Auth)

    getAuth(){
        return getAuth();
    }
    signIn(user: any){
        return signInWithEmailAndPassword(getAuth(), user.email, user.password);
    }

    signUp(userSignUp: { email: string, password: string }) {
        return createUserWithEmailAndPassword(getAuth(),userSignUp.email, userSignUp.password);
      }

    // register(email: string, username: string, password:string): Observable<void>{
    //     const promise = createUserWithEmailAndPassword(
    //         this.firebaseAuth,
    //         email,
    //         password
    //     ).then(response => updateProfile(response.user, {displayName: username}));
    //     return from(promise);
    // }
}