import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { verificationTarget } from '../types/types';
import User from './User';

const PHONE = "PHONE";
const EMAIL = "EMAIL";

@Entity()
class Verification extends BaseEntity {
    @PrimaryGeneratedColumn() id: number

    @Column({ type: "text", enum: ["PHONE", "EMAIL"] }) // enum은 배열형식
    target: verificationTarget; // target을 어떤것을 택할 건지 types.d.ts 에서 불러온다

    @Column({ type: "text" })
    payload: string;

    @Column({ type: "text" })
    key: string;

    @Column({ type: "boolean", default: false })
    used: boolean;

    @ManyToOne(type => User, user => user.verifications)
    user: User;

    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;

    @BeforeInsert()
    createKey(): void {
        if(this.target === PHONE) {
            this.key = Math.floor(Math.random() * 100000).toString();
        } else if(this.target === EMAIL ){
            this.key = Math.random()
            .toString(36) // text로 변환
            .substr(2);
        }
    }
}

export default Verification;