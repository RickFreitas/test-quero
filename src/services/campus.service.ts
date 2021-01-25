import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CampusRepository } from '../repositories/campus.repository';

@Injectable()
export class CampusService {
  constructor(
    @InjectRepository(CampusRepository)
    private campusRepository: CampusRepository,
  ) {}
}
