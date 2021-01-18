import User from "../../../entities/User";
import { 
  UpdateMyProfileMutationArgs, 
  UpdateMyProfileResponse 
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers"
import privateResolver from "../../../utils/privateResolver"

const resolvers: Resolvers = {
  Mutation: {
    UpdateMyProfile: privateResolver(async (_, args: UpdateMyProfileMutationArgs, { req }): Promise<UpdateMyProfileResponse> => {
      const user: User = req.user;
      const notNullargs = {};
      Object.keys(args).forEach(key => {
        if (args[key] !== null) {
          notNullargs[key] = args[key];
        }
      });
      try {
        if (args.password !== null) {
          user.password = args.password;
          user.save(); //trigger @BeforUpdate() 
        }
        await User.update({ id: user.id }, { ...notNullargs }); //User Instance가 없다. @BeforeUpdate() 호출되지 않는다. 
        return {
          ok: true,
          error: null
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message
        }
      }
    }) 
  }
}

export default resolvers;