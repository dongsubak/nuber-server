export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHello(name: String!): SayHelloResponse!\n  sayHelloGreeting: Greeting!\n  user: User\n}\n\ntype Greeting {\n  text: String!\n  error: Boolean!\n}\n\ntype SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype Place {\n  id: Int!\n  name: String!\n  lat: Float!\n  lng: Float!\n  address: String!\n  isFav: Boolean!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Ride {\n  id: Int!\n  status: String!\n  pickUpAddress: String!\n  pickUpLat: Float!\n  pickUpLng: Float!\n  dropOffAddress: String!\n  dropOffLat: Float!\n  dropOffLng: Float!\n  price: Float!\n  distance: String!\n  duration: String!\n  createdAt: String!\n  updatedAt: String\n}\n\n# No resolver, only graphql type\ntype User {\n  id: Int!\n  email: String\n  verifiedEmail: Boolean!\n  firstName: String!\n  lastname: String!\n  # facebookID: String\n  age: Int\n  password: String\n  phoneNumber: String\n  verifiedPhoneNumber: Boolean\n  profilePhoto: String\n  fullName: String\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastLat: Float\n  lastOrientation: Float\n  createdAt: String!\n  updatedAt: String\n}\n\ntype Verification {\n  id: Int!\n  target: String!\n  payload: String!\n  key: String!\n  used: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHello: SayHelloResponse;
  sayHelloGreeting: Greeting;
  user: User | null;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}

export interface Greeting {
  text: string;
  error: boolean;
}

export interface User {
  id: number;
  email: string | null;
  verifiedEmail: boolean;
  firstName: string;
  lastname: string;
  age: number | null;
  password: string | null;
  phoneNumber: string | null;
  verifiedPhoneNumber: boolean | null;
  profilePhoto: string | null;
  fullName: string | null;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLng: number | null;
  lastLat: number | null;
  lastOrientation: number | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Place {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  isFav: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface Ride {
  id: number;
  status: string;
  pickUpAddress: string;
  pickUpLat: number;
  pickUpLng: number;
  dropOffAddress: string;
  dropOffLat: number;
  dropOffLng: number;
  price: number;
  distance: string;
  duration: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface Verification {
  id: number;
  target: string;
  payload: string;
  key: string;
  used: boolean;
  createdAt: string;
  updatedAt: string;
}
