import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private userSubject = new BehaviorSubject<User>({
  firstName:'Ebony',
  lastName:'Moore',
  email: 'EbonyMoore456@gmail.com',
  phoneNumber: '(216)835-9545',
  homeAddress:'123 Maple Street,Cleveland,OH 44119',
  mailingAddress: '10th West, 456 Apple Street, Cleveland, OH 44127',
  ssn: '235-71-1083',
  birthday:'05/09/1998',
  medicareId: '1EG4-TE5-MK73'
});

user = this.userSubject.asObservable();

getUser(): User {
  return this.userSubject.value;
}

updateUser(user:User): void {
  this.userSubject.next(user);
}
  constructor() { }
}
