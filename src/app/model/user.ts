// Describe the User data model.
export class User {
  username: string;
  password: string;

  constructor(obj: any = null) {
    if (obj != null) {
      Object.assign(this, obj);
    }
  }
}
