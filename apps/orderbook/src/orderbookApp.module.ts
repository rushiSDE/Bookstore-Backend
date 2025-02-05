import { Module } from '@nestjs/common';
import { OrderbookModule } from './orderbook/orderbook.module';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/book-management'),
    OrderbookModule],
  controllers: [],
  providers: [],
})
export class OrderbookAppModule {}
