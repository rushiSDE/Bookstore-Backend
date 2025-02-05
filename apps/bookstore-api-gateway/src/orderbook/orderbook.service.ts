import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderbookDto } from './dto/create-orderbook.dto';
import { UpdateOrderbookDto } from './dto/update-orderbook.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderbookService {

  constructor(@Inject('ORDERBOOK_CLIENT') private  orderbookClient:ClientProxy){}
  
  create(createOrderbookDto: CreateOrderbookDto) {
    return this.orderbookClient.send('orderbook.create',createOrderbookDto);
  }

  // findAll() {
  //   return this.orderbookClient.send('orderbook.findAll',{});
  // }

  // findOne(id: number) {
  //   return this.orderbookClient.send('orderbook.findOne',id);
  // }

  // update(id: number, updateOrderbookDto: UpdateOrderbookDto) {
  //   return this.orderbookClient.send('orderbook.update',updateOrderbookDto);
  // }

  // remove(id: number) {
  //   return this.orderbookClient.send('orderbook.remove',id);
  // }
}
