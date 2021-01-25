import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversityRepostiroy } from '../repositories/university.repository';
import { UniversityService } from '../services/university.service';

@Module({
  imports: [TypeOrmModule.forFeature([UniversityRepostiroy])],
  providers: [UniversityService],
})
export class UniversitiesModule {}
