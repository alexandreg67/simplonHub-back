import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  //indique à NestJs qu'il va devoir checker les entrées avec class-validator
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('SimplonHub API')
    .setDescription('SimplonHub API description')
    .setVersion('1.0')
    .addTag('SimplonHub')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //permet d'utiliser cors pour lier front et back
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
