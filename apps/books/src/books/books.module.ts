import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
// 
import { MongooseModule } from '@nestjs/mongoose';
import { Books, BookSchema } from './books.schema'; 
// 

@Module({
  // 
  imports: [
    MongooseModule.forFeature([{ name: Books.name, schema: BookSchema }]),  // Register the schema
  ],
  // 
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
