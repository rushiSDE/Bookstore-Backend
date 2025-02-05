import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/book-management'),
    BooksModule],
  controllers: [],
  providers: [],
})
export class BooksAppModule {}
