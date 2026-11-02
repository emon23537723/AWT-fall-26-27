import { In, Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createUserDto, updateUserDto } from "./dto/user.dto";

@Injectable()
export class userService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>){}
    async getAllUsers(){
        try{
            const user= await this.userRepository.find();
            return user;
        } catch (error) {
            throw error; 
        }
    }

    async getUser(id:string){
        try{
            if(!id){
                throw new NotFoundException("User with ID not found");
            }
        const user=await this.userRepository.findOne({where: {id:id}});
        return user;
        } catch (error) { 
            throw error;
        }
    }

    async createUser(dto:createUserDto){
        try{
            const responce=this.userRepository.create(dto);
            return await this.userRepository.save(responce);
        }catch(error){
            throw error;
        }
    }

    async updateUser(id:string,dto:updateUserDto){
        try{
            if(!id){
                throw new NotFoundException("User not found");
            }
            const user=await this.userRepository.findOne({where: {id:id}});
            if(!user){
                throw new NotFoundException("User not found");
            }
            Object.assign(user,dto);
            const {id: uid, created_at,updated_at, ...rest}=user;
            const result=await this.userRepository.update({id:id},rest); 
            console.log(result);
            return result;
            
        }
        catch(error){
            throw error;
        }
    }

    async deleteUser(id:string){
        try{
            const user=await this.userRepository.findOne({where: {id:id}});
            if(!user){
                throw new NotFoundException("User not found");
            }
            return await this.userRepository.delete({id:id}); 
        }
        catch(error){
            throw error;
        }
    }

}