import{ Entity, PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn, IntegerType } from "typeorm"; 
@Entity({ name:"products" })
export class Product{
    @PrimaryGeneratedColumn("uuid")
    id!:string;

    @Column()
    name!:string;
    @Column()
    category!:string;
    @Column()
    price!:number;
    @Column()
    quantity!:number;
    @CreateDateColumn()
    created_at!:Date;
    @UpdateDateColumn()
    updated_at!:Date;
}