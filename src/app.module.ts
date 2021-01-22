import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { OffersModule } from './offers/offers.module';
import { CoursesModule } from './courses/courses.module';
import { CampusesModule } from './campuses/campuses.module';
import { UniversitiesModule } from './universities/universities.module';

@Module({
  imports: [OffersModule, CoursesModule, CampusesModule, UniversitiesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
