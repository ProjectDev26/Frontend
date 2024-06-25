export class SignUpResponse {

  public id: number;
  public username: string;
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(id: number, username: string,firstName: string, lastName: string, email: string) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
