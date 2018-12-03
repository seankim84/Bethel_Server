export const typeDefs = ["type EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  EmailSignUp(firstName: String!, lastName: String!, email: String!, password: String!, profilePhoto: String!, age: Int!): EmailSignUpResponse!\n  FacebookConnect(firstName: String!, lastName: String!, email: String!, fbId: String!): FacebookConnectResponse\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype FacebookConnectResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype User {\n  id: Int!\n  email: String\n  phoneNumber: String!\n  firstName: String!\n  lastName: String!\n  fullName: String!\n  age: Int\n  password: String!\n  profilePhoto: String!\n  verifications: [Verification]\n  fbId: String\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Query {\n  user: User!\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  paylaod: String!\n  key: String!\n  used: Boolean!\n  user: User!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  user: User;
}

export interface User {
  id: number;
  email: string | null;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  fullName: string;
  age: number | null;
  password: string;
  profilePhoto: string;
  verifications: Array<Verification> | null;
  fbId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Verification {
  id: number;
  target: string;
  paylaod: string;
  key: string;
  used: boolean;
  user: User;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  EmailSignIn: EmailSignInResponse;
  EmailSignUp: EmailSignUpResponse;
  FacebookConnect: FacebookConnectResponse | null;
}

export interface EmailSignInMutationArgs {
  email: string;
  password: string;
}

export interface EmailSignUpMutationArgs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePhoto: string;
  age: number;
}

export interface FacebookConnectMutationArgs {
  firstName: string;
  lastName: string;
  email: string;
  fbId: string;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface FacebookConnectResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}
