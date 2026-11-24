import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto, UpadateUserDto} from "./dto/user.dto";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}


async getAllUsers(){
    try{
        const user= await this.userRepository.find();
        return user;
    }
    catch(error){
        throw error; 
    }
}


async createUser(dto:CreateUserDto){
    try{
        
        const user=this.userRepository.create(dto);
        
        await this.userRepository.save(user);
        const {password, ...rest}=user;
        return rest;

    }
    catch(error){
        throw error;
    }
}
async updateUser(id: string, dto: UpadateUserDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("User with ID not found");
    }
    const user = await this.userRepository.findOne({ where: { id:id } });
    if (!user) {
      throw new NotFoundException("User with ID not found");
    }
    Object.assign(user, dto);
    const {id: uid,created_at,updated_at, ...rest}=user;
   
    return await this.userRepository.update({id:id}, rest);
  } 
  catch(error){
    throw error;
  }
}

async deleteUser(id: string) {
  try{
  const user = await this.userRepository.findOne({ where: { id:id } });
if (!user) {
  throw new NotFoundException("User with ID not found");  
}
return await this.userRepository.delete({id:id});
  } 
  catch(error){
    throw error;
  }
}}