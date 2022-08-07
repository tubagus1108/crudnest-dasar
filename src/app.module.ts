import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './customer/user.controller';
import { User, UserModels } from './customer/user.model';
import { CustomerService } from './customer/user.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tubagus2000:Satuhati1108@cluster0.lt9jimp.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name: User.name, schema: UserModels}]),
    AuthModule,
    UsersModule

],
  controllers: [UserController],
  providers: [CustomerService],
})
export class AppModule {}
