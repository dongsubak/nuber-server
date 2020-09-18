export const typeDefs = ["type Query {\n  sayBye: String!\n  # sayHello(name: String!): SayHelloResponse!\n  sayHello: Greeting!\n}\n\ntype Greeting {\n  text: String!\n  error: Boolean!\n}\n\ntype SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHello: Greeting;
}

export interface Greeting {
  text: string;
  error: boolean;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}
