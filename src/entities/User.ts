import { IsEmail } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

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

}

export default User;