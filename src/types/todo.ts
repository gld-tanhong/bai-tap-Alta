export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface Sign {
  displayName: string
  email: string,
  password: string
}

export interface Login {
  email: string,
  password: string
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}
