import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./create_user_dto";
import { User, UserDocument } from "./user.model";

@Injectable()
export class CustomerService{
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
    async findOne(id: number){
        return this.userModel.findById(id).exec();
    }
    async create(data: CreateUserDto) : Promise<User>{
       const createUser = new this.userModel(data);
        return createUser.save();
    }
    async deleteOne(id:number){
        return this.userModel.remove(id);
    }
}