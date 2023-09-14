import { Module } from '@nestjs/common';
import { PictureService } from './picture.service';
import { PictureController } from './picture.controller';
import { Picture } from './entities/picture.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Picture]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],

  controllers: [PictureController],
  providers: [PictureService],
})
export class PictureModule {}
