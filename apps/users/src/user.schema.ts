import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true }) // Ensure the username is unique
  username: string;

  @Prop({ required: true, unique: true }) // Email must be unique and required
  email: string;

  @Prop({ required: true }) // Store the plain password
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
