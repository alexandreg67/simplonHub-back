import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppartenanceModule } from './appartenance/appartenance.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { PictureModule } from './picture/picture.module';
import { RoleModule } from './role/role.module';
import { StoreModule } from './store/store.module';
import { UserModule } from './user/user.module';
import { Appartenance } from './appartenance/entities/appartenance.entity';
import { Category } from './category/entities/category.entity';
import { Picture } from './picture/entities/picture.entity';
import { Role } from './role/entities/role.entity';
import { Store } from './store/entities/store.entity';
import { User } from './user/entities/user.entity';
import { Comment } from './comment/entities/comment.entity';

@Module({
imports: [
    ConfigModule.forRoot({ envFilePath: [`.env`] }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Appartenance, Category, Comment, Picture, Role, Store, User],
      synchronize: false,
    }),
    AppartenanceModule,
    CategoryModule,
    CommentModule,
    PictureModule,
    RoleModule,
    StoreModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
