import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
    constructor(@Inject('USER_CLIENT') private  userClient:ClientProxy){}

// 
    // findAll(){
    //     return this.userClient.send('users.findAll', {});
    //    }
// 
            signup(){
                return this.userClient.send('users.signup', {});
            }

            login(){
                return this.userClient.send('users.login', {});
            }
}
