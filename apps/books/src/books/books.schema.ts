import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Books extends Document {
  id: number; 
 
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  price: number;

  @Prop()
  image: string;
}

export const BookSchema = SchemaFactory.createForClass(Books);
