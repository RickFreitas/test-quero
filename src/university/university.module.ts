import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversityRepostiroy } from './university.repository';
import { UniversityService } from './university.service';

@Module({
  imports: [TypeOrmModule.forFeature([UniversityRepostiroy])],
  providers: [UniversityService],
})
export class UniversitiesModule {}
