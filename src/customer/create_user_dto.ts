export class CreateUserDto{
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    createdAt: Date;
}