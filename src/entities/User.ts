import bcrypt from 'bcrypt';
import { IsEmail } from 'class-validator';
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Verification from './Verification';

const BCRYPT_ROUNDS = 10;

@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn() id: number;
    
    @Column({type: "text", nullable: true})
    @IsEmail() // class-validator
    email: string | null; // string | null로 바꾸어야 fbconnect resolver에서 ...args 전달이 가능
    
    @Column({type: "text", unique: true })
    phoneNumber: string;

    @Column({type: "text"})
    firstName: string;
    
    @Column({type: "text"})
    lastName: string;

    @Column({type: "int", nullable: true})
    age: number;

    @Column({type: "text"})
    password: string;

    @Column({type: "text"})
    profilePhoto: string;

    @Column({type: "text", nullable: true})
    fbId: string;

    @OneToMany(type => Verification, verification => verification.user)
    verifications: Verification[]; // User는 Verification을 가지고 있다.

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    public comparePassword(password:string ): Promise<boolean>{ // class 바깥쪽에서도 사용할 수 있는 함수를 만들때 사용 (resolver에서 사용)
        return bcrypt.compare(password, this.password); // 사용자가 입력한 password와 아래 this.password를 비교 
    } // compare 함수는 true or false로 반환된다.

    @BeforeInsert()//우리가 Insert 하기 전에 호출되는 Method
    @BeforeUpdate()//우리가 Update 하기 전에 호출되는 Method
    async savePassword(): Promise<void> { //void 값을 갖는 Promise 객체를 return 한다.
        if (this.password) { // Promise는 async를 사용했기 때문에 return 하는것!(Promise를 빼고 return 한다면 async 함수는 void를 return 할 수 없다고 한다.)
            const hashedPassword = await this.hashPassword(this.password); // hashPasswrod를 작업하는 동안 시간이 걸리기 때문에 await 사용(아래 함수가 끝나기를 기다림)
            this.password = hashedPassword;
        }
    }

    private hashPassword(password: string): Promise<string> { // private은 class 안에서 method를 선언하여 사용할때 쓴다.
        return bcrypt.hash(password, BCRYPT_ROUNDS); // hash란 모양을 바꾸어주는것
    }
}

export default User;