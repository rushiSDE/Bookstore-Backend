import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  // 
  findAll(){
    return 'mock findall response';
   }
// 


constructor(
  @InjectModel(User.name) private userModel: Model<User>,
  private jwtService: JwtService,
) {}
// Signup Method (without password hashing)
async signup(username: string, email: string, password: string) {
  // Check if user with the same username or email already exists
  const existingUser = await this.userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new ConflictException('Username or email already exists');
  }

  // Create new user with plain text password
  const newUser = new this.userModel({
    username,
    email,
    password,  // Store the plain password
  });

  await newUser.save();

  // Return user details without password for confirmation
  return { username: newUser.username, email: newUser.email };
}

// Login Method (without password hashing)
async login(username: string, password: string) {
  // Find the user by username
  const user = await this.userModel.findOne({ username });
  if (!user) {
    throw new UnauthorizedException('user not exist');
  }

  // Compare entered password with stored plain text password
  if (password !== user.password) {
    throw new UnauthorizedException('wrong password');
  }

  // Generate JWT token
  const payload = { username: user.username, email: user.email };
  const token = this.jwtService.sign(payload, { expiresIn: '1h' });

  return { accessToken: token };
}


}
