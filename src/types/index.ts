export interface SignIn {
  email: string;
  password: string;
}

export interface User extends SignIn {
  password: string;
  id?: string;
}
