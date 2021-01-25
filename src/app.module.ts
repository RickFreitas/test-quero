import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { OffersModule } from './offers/offers.module';
import { CoursesModule } from './course/course.module';
import { CampusModule } from './campuses/campus.module';
import { UniversitiesModule } from './university/university.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    OffersModule,
    CoursesModule,
    CampusModule,
    UniversitiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
