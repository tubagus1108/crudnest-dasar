import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/customer/user.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userAuthModel:Model<UserDocument>){}
    async findOne(email: String){
        return this.userAuthModel.find(email).exec();
    }
   
}
