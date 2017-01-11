import { User } from './../model/user';

export class UserService {

  user: User;

  constructor() {}

  getUser(): User {
    return this.user;
  }

  setUser(uid: string, email: string): void {
    this.user = new User(uid, email);
  }

}
