export type Resolver = (parent: any, args: any, context: any, info: any) => any;
//resolver는 항상 parent, args, context, info를 가진다
export interface Resolvers {
  [key: string]: {
    [key: string]: Resolver
  }
}

//const resolvers: Resolvers = {
//  Query: {
//    sayHello: {
//      hello: true
//    }
//    // sayHello: () => ""
//  }
//};