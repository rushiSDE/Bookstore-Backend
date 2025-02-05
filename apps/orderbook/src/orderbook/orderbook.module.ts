import { Module } from '@nestjs/common';
import { OrderbookService } from './orderbook.service';
import { OrderbookController } from './orderbook.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { selectedbook,OrderbookSchema } from './orderbook.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: selectedbook.name, schema: OrderbookSchema }]), // Register schema
  ],
  controllers: [OrderbookController],
  providers: [OrderbookService],
})
export class OrderbookModule {}
