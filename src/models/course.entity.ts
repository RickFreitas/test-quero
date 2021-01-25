import { Campus } from './campus.entity';
import { Offer } from './offers.entity';
import { University } from './university.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  name: string;

  @Column({ nullable: false, type: 'varchar' })
  kind: string;

  @Column({ nullable: false, type: 'varchar' })
  shift: string;

  @Column({ nullable: false, type: 'varchar' })
  level: string;

  @OneToMany(() => Offer, (offer) => offer.course)
  offers: Offer[];

  @ManyToOne(() => Campus, (campus) => campus.courses)
  campus: Campus;

  @ManyToOne(() => University, (university) => university.courses)
  university: University;
}
