import { Module } from '@nestjs/common';
import { OrderbookService } from './orderbook.service';
import { OrderbookController } from './orderbook.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
        ClientsModule.register([{
          name:'ORDERBOOK_CLIENT',
          transport:Transport.TCP,
          options:{port:3003},
        },
      ]),
      ],
  controllers: [OrderbookController],
  providers: [OrderbookService],
})
export class OrderbookModule {}
