import{ Entity, PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn } from "typeorm"; 
@Entity({ name:"users" })
export class User{
    @PrimaryGeneratedColumn("uuid")
    id!:string;

    @Column()
    name!:string;
    @Column()
    email!:string;
    @Column()
    password!:string;
    @Column()
    age!:number;
    @Column()
    yearsofWorking!:number;
    @CreateDateColumn()
    created_at!:Date;
    @UpdateDateColumn()
    updated_at!:Date;
}