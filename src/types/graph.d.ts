export const typeDefs = ["type SayHellowResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype Query {\n  sayHellow(name: String!): SayHellowResponse!\n}\n"];
/* tslint:disable */

export interface Query {
  sayHellow: SayHellowResponse;
}

export interface SayHellowQueryArgs {
  name: string;
}

export interface SayHellowResponse {
  text: string;
  error: boolean;
}
