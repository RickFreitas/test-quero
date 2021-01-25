import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampusRepository } from '../repositories/campus.repository';
import { CampusService } from '../services/campus.service';

@Module({
  imports: [TypeOrmModule.forFeature([CampusRepository])],
  providers: [CampusService],
})
export class CampusModule {}
