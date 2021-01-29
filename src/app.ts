
import cors from "cors";
import { NextFunction, Response } from "express";
import { GraphQLServer, PubSub } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from"./schema"; 
import decodeJWT from "./utils/decodeJWT";

class App {
  public app: GraphQLServer;
  public pubSub: any; //only for demo
  constructor() {
    this.pubSub = new PubSub(); //only for demo
    this.pubSub.ee.setMaxListeners(99); //only for demo
    this.app = new GraphQLServer({
      schema,
      context: req => {
        console.log(req.connection.context.currentUser); //req.connection 에 websocket 있다.
        const { connection: { context = null } = {} } = req;
        return {
          req: req.request, //express //req.request 에 html request 있다.
          // user: ""
          pubSub: this.pubSub,
          context
        }
      } 
      //이렇게 context에 넣으면, 어떤 resolvers에서도 불러올 수 있다. Query, Mutation 등에서.
      //~.resolvers.ts
      //const resolvers: Resolvers = { Query: { user: (parent, args, context) => { console.log(context); return ""; }}}
    });
    this.middlewares();
  }
  private middlewares = () : void => {
    this.app.express.use(cors());
    this.app.express.use(logger("dev"));
    this.app.express.use(helmet());
    this.app.express.use(this.jwtMiddleware);
  };
  
  private jwtMiddleware = async (
    req, 
    res: Response, 
    next: NextFunction
  ): Promise<void> => {
    const token = req.get("X-JWT");
    if (token) {
      const user = await decodeJWT(token);
      console.log(user);
      //put user to req
      if (user) {
        req.user = user;
      } else {
        req.user = undefined;
      }
    }
    next();
  };
}

export default new App().app;   
