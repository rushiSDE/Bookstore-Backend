import { NestFactory } from '@nestjs/core';
import { BookstoreApiGatewayModule } from './bookstore-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(BookstoreApiGatewayModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:5000', // Allow your frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies if needed
  });
  
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
