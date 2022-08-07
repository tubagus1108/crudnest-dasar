import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose';
export type UserDocument = User & Document
@Schema()

export class User {
    @Prop({required: true})
    name: string

    @Prop({required: true})
    email: string
   
    @Prop({ type: String, required: true, trim: true, minlength: 6 })
    password: string;

    @Prop({default: true})
    isActive: boolean

    @Prop({ type: Date, default: Date.now() })
    createdAt: Date;
}

export const UserModels = SchemaFactory.createForClass(User)