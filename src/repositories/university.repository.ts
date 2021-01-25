import { EntityRepository, Repository } from 'typeorm';
import { University } from '../models/university.entity';

@EntityRepository(University)
export class UniversityRepostiroy extends Repository<University> {}
