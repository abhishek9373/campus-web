export interface UserI {
  _id: string;
  isVerified: boolean;
  mobile: string;
  firstName: string;
  type: string;
  gender: number;
  name: string;
  occupation: string;
  bio: string;
  branch: string;
  email: string;
  lastName: string;
  year: number;
  birthdate: Date;
  collegeName: string;
  preferences: UserPerferences | any;
}

export interface UserPerferences{
  profilePhoto: string,
  location: UserLocation
}

interface UserLocation{
  type: "Point",
  coordinates: Array<number>
}

export interface UserResponse {
}
