import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blogs/blog.module';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { type RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      url: process.env.REDIS_URL,
      store: redisStore,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      dbName: 'personal',
    }),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    AppService,
  ],
})
export class AppModule {}
