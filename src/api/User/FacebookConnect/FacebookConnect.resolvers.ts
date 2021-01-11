import createJWT from "../../../utils/createJWT";
import User from "../../../entities/User";
import { 
  FacebookConnectMutationArgs, 
  FacebookConnectResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    user: (parent, args, context) => {
      console.log(context.req.user);
      return "";
    }
  },
  Mutation: {
    FacebookConnect: async(
      _, 
      args: FacebookConnectMutationArgs
    ): Promise<FacebookConnectResponse> => {
      const { fbId } = args;
      try {
        const existingUser = await User.findOne({ fbId });
        //console.log("existingUser: ", existingUser);
        if (existingUser) {
          const token = createJWT(existingUser.id)
          return {
            ok: true,
            error: null,
            token //token: token
          };
        } // else{try{}catch(error){}} 하지 않고, 부모 try-catch 바깥으로 뺀다.
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
      try {
        const newUser = await User.create({
          ...args, 
          profilePhoto: `http://graph.facebook.com/${fbId}/picture?type=square`
        }).save();
          const token = createJWT(newUser.id)
        // if (newUser) {
          return {
            ok: true,
            error: null,
            token //token: token
          }
        // }
      } catch(error){
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
    }
  }
}

export default resolvers;