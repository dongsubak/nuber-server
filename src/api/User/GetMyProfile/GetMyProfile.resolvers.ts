import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver"

const resolvers: Resolvers = {
  Query: {
    // (_,__, {req}) = (parent=underbar 1, args=underbar 2, context)
    GetMyProfile: privateResolver(async (_, __, { req }) => {
      const { user } = req;
      // if(user){throw new Error("...")} 가 authResolver 함수 안으로 들어갔다. 그리고 if문을 먼저 실행한다.
      return {
        ok: true,
        error: null,
        user //user: user
      }
    })
  }
}

export default resolvers;