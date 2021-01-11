import { Resolvers } from "../../../types/resolvers";

const resolvers :Resolvers= {
  Query: {
    // (_,__, {req}) = (parent=underbar 1, args=underbar 2, context)
    GetMyProfile: async (_, __, {req}) => {
      const { user } = req;
      return {
        ok: true,
        error: null,
        user //user: user
      }
    }
  }
}

export default resolvers;