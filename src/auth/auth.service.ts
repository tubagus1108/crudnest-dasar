import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}
    async validate(email:String){
        const user = await this.userService.findOne(email);
        return user;
    }
}
