export const typeDefs = ["type User {\n  id: Int!\n  email: String!\n  phoneNumber: String!\n  firstName: String!\n  lastName: String!\n  fullName: String!\n  age: Int!\n  password: String!\n  profilePhoto: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Query {\n  user: User!\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  paylaod: String!\n  key: String!\n  used: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  user: User;
}

export interface User {
  id: number;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  password: string;
  profilePhoto: string;
  createdAt: string;
  updatedAt: string;
}

export interface Verification {
  id: number;
  target: string;
  paylaod: string;
  key: string;
  used: boolean;
  createdAt: string;
  updatedAt: string | null;
}
