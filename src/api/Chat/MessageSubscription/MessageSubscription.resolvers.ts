import { withFilter } from "graphql-yoga";
import Chat from "../../../entities/Chat";
import User from "../../../entities/User";

const resolvers = {
  Subscription: {
    MessageSubscription: {
      subscribe: withFilter((_, __, { pubSub }) => pubSub.asyncIterator("newChatMessage"),
        async (payload, _, { context }) => {
          //console.log(payload);
          //console.log(`Listening`, context);
          const user: User = context.currentUser;
          const { MessageSubscription: { chatId } } =  payload; //driverId, passengerId가 아니다. message 안에 있는 건 chatId.
          try {
            const chat = await Chat.findOne({ id: chatId });
            if (chat) {
              return chat.driverId === user.id || chat.passengerId === user.id;
            } else {
              return false;
            }
          } catch (error) {
            return false;
          }
        }
      )
    }
  }
}
;
export default resolvers;