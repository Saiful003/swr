export interface IUser {
  created_at: string;
  id: number;
  username: string;
}

export interface IFriend {
  created_at: string;
  id: number;
  introduceBy: string;
  name: string;
  age: number;
  profession: string;
}
