import { Course } from 'src/course/course.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

@Entity()
export class University extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @Column({ nullable: false, type: 'float' })
  score: number;

  @Column({ nullable: false, type: 'varchar' })
  logo_url: string;

  @OneToMany(() => Course, (course) => course.university)
  courses: Course[];
}
