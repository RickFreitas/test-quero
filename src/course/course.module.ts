import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseRepostiroy } from './course.repository';
import { CourseService } from './course.service';

@Module({
  imports: [TypeOrmModule.forFeature([CourseRepostiroy])],
  providers: [CourseService],
})
export class CoursesModule {}
