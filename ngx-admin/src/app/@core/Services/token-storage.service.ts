import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';
const USER_INFO = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private router: Router) { }

  signOut(): void {
    localStorage.clear();
    this.router.navigateByUrl("/auth");
  }

  // Mock method to save a mock token
  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  // Mock method to retrieve a mock token
  public getToken(): any | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_INFO);
    localStorage.setItem(USER_INFO, JSON.stringify(user));
  }

  public updateUser(user: any): void {
    localStorage.removeItem(USER_INFO);
    localStorage.setItem(USER_INFO, JSON.stringify(user));
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_INFO);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public updateSignature(signature: any): void {
    let user = this.getUser();
    if (user) {
      user.signature = signature;
      this.updateUser(user);
    }
  }
}
