import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

//  @MessagePattern('users.findAll')
//  findAll(){
//   return this.usersService.findAll()
//  }

@MessagePattern('users.signup')
async signup(data: { username: string; email: string; password: string }) {
  if (!data.username || !data.email || !data.password) {
    throw new Error('Username, email, and password are required.');
  }
  console.log("Received signup data:", data); // Verify incoming data
  return this.usersService.signup(data.username, data.email, data.password);
}

@MessagePattern('users.login')
async login(data: { username: string; password: string }) {
  // Check if the required fields are present
  if (!data.username || !data.password) {
    throw new Error('Username and password are required.');
  }
  
  console.log("Received login data:", data); // Log received data for debugging

  // Call the login service with the provided data
  return this.usersService.login(data.username, data.password);
}




// @MessagePattern('users.login')
// async login(data: { username: string; password: string }) {
//   return this.usersService.login(data.username, data.password);
// }

}
