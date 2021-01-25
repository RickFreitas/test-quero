import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseRepostiroy } from '../repositories/course.repository';
import { CourseService } from '../services/course.service';

@Module({
  imports: [TypeOrmModule.forFeature([CourseRepostiroy])],
  providers: [CourseService],
})
export class CoursesModule {}
