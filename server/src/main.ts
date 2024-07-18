import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ResponseInterceptor } from '@common/interceptors/response.interceptor';
import { TimeoutInterceptor } from '@common/interceptors/time-out.interceptor';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';

const PORT = 4000;
const HTTP_DOMAIN = [
  'http://localhost:3000',
  'https://gofoodie.co.kr',
  'https://www.gofoodie.co.kr',
  'www.gofoodie.co.kr',
  'gofoodie.co.kr',
  '.gofoodie.co.kr',
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new TimeoutInterceptor());
  app.useGlobalInterceptors(new ResponseInterceptor());

  app.use(cookieParser());
  app.use(compression());

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.enableCors({
    origin: HTTP_DOMAIN,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: 200,
  });

  console.log(`Server listen to Port ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
