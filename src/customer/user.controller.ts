import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { encodePassword } from "src/utils/bycrpt";
import { CreateUserDto } from "./create_user_dto";
import { CustomerService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: CustomerService) {}

    @Get()
    async findAll(){
        return {
            data: await this.userService.findAll()
        };
    }

    @Get(':id')
    async findOne(@Param('id') id: number){
        return {
            data: await this.userService.findOne(id)
        };
    }

    @Post()
    async createUser(@Body() data: CreateUserDto){
        const password = encodePassword(data.password);
        return {
            data: await this.userService.create({...data,password})
        }
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:number){
        return{
            data: await this.userService.deleteOne(id)
        }
    }
}