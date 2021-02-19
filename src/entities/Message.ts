import { 
  BaseEntity,  
  Column,
  CreateDateColumn, 
  Entity, 
  ManyToOne,
  PrimaryGeneratedColumn, 
  UpdateDateColumn,
} from "typeorm";

import Chat from "./Chat";
import User from "./User";

@Entity()
class Message extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text" })
  text: string;

  @Column({ nullable :true })
  chatId: number;

  @ManyToOne(type => Chat, chat => chat.messages)
  chat: Chat; //chat in Message.graphql

  @ManyToOne(type => User, user => user.messages)
  user: User; //user in Message.graphql

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}
export default Message;