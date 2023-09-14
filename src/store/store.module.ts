import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { Store } from './entities/store.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Store, Category]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
