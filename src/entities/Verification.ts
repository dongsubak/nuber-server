import { 
  BaseEntity, 
  BeforeInsert,
  Column, 
  CreateDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";
import { verificationTarget } from "../types/types"

const PHONE = "PHONE";
const EMAIL = "EMAIL";

@Entity()
class Verification extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "text", enum: [PHONE, EMAIL] })
  target: verificationTarget;

  @Column({ type: "text" })
  payload: string;

  @Column({ type: "text" })
  key: string;

  //@Column({ type: "boolean", default: false })
  //used: boolean; //redundant

  //@ManyToOne(type => User, user => user.verifications, { nullable: true }) //user없이 phone number만으로도 가능. 
  //user: User;

  @CreateDateColumn() createdAt: string;
  @UpdateDateColumn() updatedAt: string;

  // Key 
  @BeforeInsert()
  createKey(): void{
    if(this.target == PHONE){
      this.key = Math.floor(Math.random() * 100000).toString();
    } else if (this.target == EMAIL){
      this.key = Math.random().toString(36).substr(2);
    }
  };
}
export default Verification;