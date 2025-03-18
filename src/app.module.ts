import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TagModule,
    // .forRoot() method is used to configure the database connection
    // TODO: move the database configuration to a separate file called ormconfig.ts in src.
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mediumclone',
      password: '300301',
      database: 'mediumclone',
      entities: [],
      // Don't use this in prod !!
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
