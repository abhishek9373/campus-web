import { Injectable } from '@angular/core';
import { User } from '../classes/user.service';
import { UserI } from '../interfaces/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: UserI): void {
    const newUser = new User(user);
    this.userSubject.next(newUser);
  }

  getCurrentUser(): User | null {
    return this.userSubject.value;
  }
}
