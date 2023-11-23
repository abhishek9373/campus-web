import { UserI, UserPerferences } from '../interfaces/user';

export class User implements UserI {
  _id!: string;
  isVerified!: boolean;
  mobile!: string;
  firstName!: string;
  type!: string;
  gender!: number;
  name!: string;
  occupation!: string;
  bio!: string;
  branch!: string;
  email!: string;
  lastName!: string;
  year!: number;
  birthdate!: Date;
  collegeName!: string;
  preferences!: UserPerferences;

  constructor(user: UserI) {
    this._id = user._id;
    this.isVerified = user.isVerified;
    this.mobile = user.mobile;
    this.firstName = user.firstName;
    this.type = user.type;
    this.gender = user.gender;
    this.name = user.name;
    this.occupation = user.occupation;
    this.bio = user.bio;
    this.branch = user.branch;
    this.email = user.email;
    this.lastName = user.lastName;
    this.year = user.year;
    this.birthdate = user.birthdate;
    this.collegeName = user.collegeName;
    this.preferences = user?.preferences
  }
}
