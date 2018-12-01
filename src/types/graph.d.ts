export const typeDefs = ["type Greeting {\n  text: String!\n  error: Boolean!\n}\n\ntype Query {\n  sayHellow: Greeting!\n}\n"];
/* tslint:disable */

export interface Query {
  sayHellow: Greeting;
}

export interface Greeting {
  text: string;
  error: boolean;
}
