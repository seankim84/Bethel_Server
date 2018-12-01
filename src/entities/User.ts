import bcrypt from 'bcrypt';
import { IsEmail } from 'class-validator';
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

const BCRYPT_ROUNDS = 10;

@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn() id: number;
    
    @Column({type: "text", unique: true})
    @IsEmail() // class-validator
    email: string;

    @Column({type: "text"})
    firstName: string;
    
    @Column({type: "text"})
    lastName: string;

    @Column({type: "int"})
    age: number;

    @Column({type: "text"})
    password: string;

    @Column({type: "text"})
    profilePhoto: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @BeforeInsert()//우리가 Insert 하기 전에 호출되는 Method
    @BeforeUpdate()//우리가 Update 하기 전에 호출되는 Method
    async savePassword(): Promise<void> { //void 값을 갖는 Promise 객체를 return 한다.
        if (this.password) { // Promise는 async를 사용했기 때문에 return 하는것!(Promise를 빼고 return 한다면 async 함수는 void를 return 할 수 없다고 한다.)
            const hashedPassword = await this.hashPassword(this.password); // hashPasswrod를 작업하는 동안 시간이 걸리기 때문에 await 사용(아래 함수가 끝나기를 기다림)
            this.password = hashedPassword;
        }
    }

    private hashPassword(password: string): Promise<string> { 
        return bcrypt.hash(password, BCRYPT_ROUNDS); // hash란 모양을 바꾸어주는것
    }

    
    
}

export default User;