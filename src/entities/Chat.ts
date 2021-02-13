import { 
  BaseEntity,  
  Column,  
  CreateDateColumn, 
  Entity, 
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";

import Message from "./Message";
import User from "./User";

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @OneToMany(type => Message, message => message.chat, { nullable: true })
  messages: Message[];

  //@OneToMany(type => User, user => user.chat)
  //participants: User[];

  @Column({ nullable: true })
  passengerId: number

  @ManyToOne(type => User, user => user.chatsAsPassenger)
  passenger: User; //passenger is column

  @Column({ nullable: true })
  driverId: number

  @ManyToOne(type => User, user => user.chatsAsDriver)
  driver: User; //driver is column


  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;
}
export default Chat;