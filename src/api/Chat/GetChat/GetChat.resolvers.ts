import Chat from "../../../entities/Chat";
import User from "../../../entities/User";
import { GetChatQueryArgs, GetChatResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

const resolver: Resolvers = {
  Query: {
    GetChat: privateResolver(async(_, args: GetChatQueryArgs, { req }): Promise<GetChatResponse> => {
      const user: User = req.user;
      //await Ride.delete({});
      //user.isTaken = false;
      //user.isRiding = false;
      //user.save();
      //await User.update({ id: 1 }, { isRiding: false, isTaken: false });
      try {
        const chat = await Chat.findOne({
          id: args.chatId
        },
        {
          relations: ["messages"] //["passenger", "driver"] relation 써야 다른 정보도 가지고 온다.
        });
        if (chat) {
          if (chat.passengerId === user.id || chat.driverId === user.id) {
            return {
              ok: true,
              error: null,
              chat
            };
          } else {
            return {
              ok: false,
              error: "Not Authorized",
              chat: null
            };
          }
        } else {
          return {
            ok: false,
            error: "Not found",
            chat: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          chat: null
        };
      }
    })
  }
}
export default resolver;