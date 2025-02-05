import { Injectable } from '@nestjs/common';
import { CreateOrderbookDto } from './dto/create-orderbook.dto';
import { UpdateOrderbookDto } from './dto/update-orderbook.dto';
import { selectedbook } from './orderbook.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrderbookService {

  constructor(
    @InjectModel(selectedbook.name) private readonly bookModel: Model<selectedbook>,
  ) {}

  async create(createOrderbookDto: CreateOrderbookDto): Promise<selectedbook> {
    // Create and save the new book
    const newBook = new this.bookModel(createOrderbookDto);
    return await newBook.save();
  }
}
