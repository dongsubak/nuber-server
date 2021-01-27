import dotenv from "dotenv";
dotenv.config();
//dotenv.config({ path: "../.env"});

import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import app from "./app";
import connectionOptions from "./ormConfig";
import decodeJWT from "./utils/decodeJWT";

const PORT: number | string = process.env.PORT || 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";
const SUBSCRIPTION_ENDPOINT: string = "/subscription";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT,
  subscriptions: {
    path: SUBSCRIPTION_ENDPOINT,
    onConnect: async connectionParams => {  
      //console.log(connectionParams);
      const token = connectionParams['X-JWT'];
      if (token) {
        const user = await decodeJWT(token);
        if (user) {
          return {
            currentUser: null //graphql subscription에 currentUser가 존재.
          };
        } 
      }
      throw new Error("No JWT.");
    }
  }
}

const handleAppStart = () => console.log(`Listening on port ${PORT}`);

createConnection(connectionOptions).then(() => {
  app.start(appOptions, handleAppStart);    
}).catch(error => console.log(error));