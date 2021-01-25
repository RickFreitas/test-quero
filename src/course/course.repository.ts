import { EntityRepository, Repository } from 'typeorm';
import { Course } from './course.entity';

@EntityRepository(Course)
export class CourseRepostiroy extends Repository<Course> {}
