import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrderbookService } from './orderbook.service';
import { CreateOrderbookDto } from './dto/create-orderbook.dto';
// import { UpdateOrderbookDto } from './dto/update-orderbook.dto';

@Controller()
export class OrderbookController {
  constructor(private readonly orderbookService: OrderbookService) {}

  @MessagePattern('orderbook.create')
  create(@Payload() createOrderbookDto: CreateOrderbookDto) {
    return this.orderbookService.create(createOrderbookDto);
  }


}
