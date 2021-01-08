export class User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  rank: number;

  constructor(firstName: string, lastName: string, username: string, password: string, rank?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.rank = rank || 0;
  }

  fullName(): string {
    return this.firstName + " " + this.lastName;
  }

}
