class User {
  UID: string;
  LastName: string;
  FirstName: string;
  Hobbies: string[];

  constructor(id: string, lname: string, fname: string, hobies: string[]) {
    this.UID = id;
    this.LastName = lname;
    this.FirstName = fname;
    this.Hobbies = hobies;
  }

  toJSON() {
    return { user_id: this.UID, last_name: this.LastName, first_name: this.FirstName };
  }
}

export default User;
