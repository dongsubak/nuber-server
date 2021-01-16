import { User } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";


const resolvers: Resolvers = {
  Mutation: {
    RequestEmailVerification: privateResolver(async(_, __, { req }) => {
      const user: User = req.user;
    })
  }
}