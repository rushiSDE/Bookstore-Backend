import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class selectedbook extends Document {
  id: number; 
 
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  price: number;

  @Prop()
  image: string;

  @Prop({ required: true })
  name: string; // Added the 'name' field

  @Prop({ required: true })
  address: string; // Added the 'address' field

  @Prop({
    required: true,
    match: /^\d{10}$/, // Ensures it's a valid 10-digit mobile number
  })
  mobileNumber: string; // Added the 'mobileNumber' field

  @Prop({
    required: true,
    match: /^\d{6}$/, // Ensures it's a valid 6-digit pin code
  })
  pinCode: string; // Added the 'pinCode' field

}

export const OrderbookSchema = SchemaFactory.createForClass(selectedbook);
