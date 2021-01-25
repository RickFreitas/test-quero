import { Course } from './course.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Offer extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, type: 'float' })
  full_price: number;

  @Column({ nullable: false, type: 'float' })
  price_with_discount: number;

  @Column({ nullable: false, type: 'float' })
  discount_percentage: number;

  @Column({ nullable: false, type: 'varchar' })
  start_date: string;

  @Column({ nullable: false, type: 'varchar' })
  enrollment_semester: string;

  @Column({ nullable: false, type: 'boolean' })
  enabled: string;

  @ManyToOne(() => Course, (course) => course.offers)
  course: Course;
}
