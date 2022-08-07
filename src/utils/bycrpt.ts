import * as bycrypt from 'bcrypt';
export function encodePassword(rawPassword:string){
    const SALT = bycrypt.genSaltSync();
    return bycrypt.hashSync(rawPassword,SALT)
}