import { Body, Controller,Get, Post } from '@nestjs/common';
// import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
// constructor(private usersService:UsersService){}
@Client({ transport: Transport.TCP, options: { port: 3001 } })
  private client: ClientProxy;

@Post('signup')
signup(@Body() body: { username: string; email: string; password: string }): Observable<any> {
    console.log('Received signup data:', body);
    return this.client.send('users.signup', body);
}

@Post('login')
login(@Body() body: { username: string; password: string }): Observable<any> {
    console.log('Received login data:', body);
    return this.client.send('users.login', body);
}

// @Get()
// findAll(){
//  return this.usersService.findAll()
// }


// @Post()
// login(){
//  return this.usersService.login()
// }


}