
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userSubject: BehaviorSubject<any>

  constructor(private router: Router) {
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || 'null')
    );
  }

  getCurrentUser(): any {
    const u = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    this.userSubject.next(u);
    return u

  }

  login(user: any): Observable<any> {


    sessionStorage.setItem('currentUser', JSON.stringify(user));

    this.router.navigate(['/home']);
    this.userSubject.next(user);
    return user
  }

  logout() {

    sessionStorage.clear();

    this.router.navigate(['/login']);
    this.userSubject.next(null);
  }

  isLoggedIn(): boolean {
    let loggedIn: boolean = false;

    let u = sessionStorage.getItem('currentUser');

    if(u) {
      loggedIn = true;
    }

    return loggedIn
  }
}
