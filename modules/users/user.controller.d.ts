import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("./entities/user.entity").User[]>;
    createUser(dto: CreateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        age: number;
        phone: string;
        accounttype: string;
        address: string;
        created_at: Date;
        updated_at: Date;
    }>;
    updateUser(id: string, dto: CreateUserDto): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: string): Promise<import("typeorm").DeleteResult>;
}
