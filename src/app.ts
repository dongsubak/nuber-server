
import cors from "cors";
import { NextFunction, Response, Request } from "express";
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from"./schema"; 
import decodeJWT from "./utils/decodeJWT";

class App {
  public app: GraphQLServer;
  constructor() {
    this.app = new GraphQLServer({
      schema,
      context: req => {
        return {
          req: req.request //express
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
  
  private jwtMiddleware = async(
    req: Request, 
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
      }
    }
    next();
  };
}

export default new App().app;   
