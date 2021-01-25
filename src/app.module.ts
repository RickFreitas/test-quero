import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { OffersModule } from './modules/offers.module';
import { CoursesModule } from './modules/course.module';
import { CampusModule } from './modules/campus.module';
import { UniversitiesModule } from './modules/university.module';

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
