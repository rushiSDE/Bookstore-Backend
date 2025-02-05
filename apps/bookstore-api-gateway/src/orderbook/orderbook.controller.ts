import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderbookService } from './orderbook.service';
import { CreateOrderbookDto } from './dto/create-orderbook.dto';
// import { UpdateOrderbookDto } from './dto/update-orderbook.dto';

@Controller('orderbook')
export class OrderbookController {
  constructor(private readonly orderbookService: OrderbookService) {}

  @Post()
  create(@Body() createOrderbookDto: CreateOrderbookDto) {
    return this.orderbookService.create(createOrderbookDto);
  }

  // @Get()
  // findAll() {
  //   return this.orderbookService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.orderbookService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateOrderbookDto: UpdateOrderbookDto) {
  //   return this.orderbookService.update(+id, updateOrderbookDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.orderbookService.remove(+id);
  // }
}
