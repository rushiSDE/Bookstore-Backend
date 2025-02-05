import { NestFactory } from '@nestjs/core';
import { OrderbookAppModule } from './orderbookApp.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
 const app = await NestFactory.createMicroservice<MicroserviceOptions>(
     OrderbookAppModule,
       {
         transport:Transport.TCP,
         options:{
           port:3003,
         }
       }
     );
   await app.listen();
}
bootstrap();
