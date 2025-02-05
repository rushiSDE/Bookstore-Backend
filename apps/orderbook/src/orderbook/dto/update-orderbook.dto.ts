import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderbookDto } from './create-orderbook.dto';

export class UpdateOrderbookDto extends PartialType(CreateOrderbookDto) {
  id: number;
}
