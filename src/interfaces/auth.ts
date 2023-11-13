export interface ILoginInput {
  email: string;
  password: string;
}

export interface IRegisterInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
