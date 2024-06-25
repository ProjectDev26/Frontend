export class SignUpRequest {

  public username: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(username: string, password: string, firstName: string, lastName: string, email: string) {
    this.password = password;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
