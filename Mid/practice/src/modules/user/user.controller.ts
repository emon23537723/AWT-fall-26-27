import { Body,  Controller,Delete, Get, Param,  Patch,Post} from "@nestjs/common";
import { userService } from "./user.service";
import {  createUserDto, updateUserDto } from "./dto/user.dto";

@Controller("users")
export class userController {
  constructor(private readonly userService: userService) {}

  @Get()
  async getUsers() {
    return await this.userService.getAllUsers();
  }

  @Get(":id")
  async getUser(@Param("id") id: string) {
    return await this.userService.getUser(id);
  }
  
  @Post()
  async createUser(@Body() dto: createUserDto) {
    return await this.userService.createUser(dto);
  }

  @Patch(":id")
  async updateUser(@Param("id") id: string, @Body() dto: updateUserDto) {
    return await this.userService.updateUser(id, dto);
  }

  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    return await this.userService.deleteUser(id);
  }
}