// import { Greeting } from "../../../types/graph";
// import { SayHelloResponse, slayHelloQueryArgs } from "../../../types/graph"; 
const resolvers = {
    Query: {
        sayHello: () => "Hey hello"
        /*
        sayHello: (): Greeting => {
            return {
                error: false,
                text: "love you"
            }
        }
        */
        /*
        sayHello: (_, args: SayHelloQueryArgs ): SayHelloResponse => {
            console.log(args.name)
            return {
                error: false,
                text: `Hello ${args.name}`
            }
        }
        */
    }
}

export default resolvers;