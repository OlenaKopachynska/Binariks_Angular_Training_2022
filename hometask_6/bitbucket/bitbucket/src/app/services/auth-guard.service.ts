import { Injectable } from '@angular/core';
import {CanActivate, Router, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      return true;
    }

    this.router.navigate(['/login'], );
    return false;
  }
}
