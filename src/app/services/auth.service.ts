import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];

  private currentUser: string | null = null;

  login(username: string, password: string): boolean {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      this.currentUser = username;
      return true;
    }
    return false;
  }

  register(username: string, password: string): boolean {
    const userExists = this.users.some(user => user.username === username);
    if (userExists) {
      return false;
    }
    this.users.push({ username, password });
    return true;
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  updateUser(username: string | null, password: string): Observable<void> {
    // Logique de mise à jour de l'utilisateur (doit être remplacée par une vraie API)
    this.currentUser = username;
    // Supposons que la mise à jour du mot de passe est toujours réussie
    return of();
  }
}
