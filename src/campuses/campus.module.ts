import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampusRepository } from './campus.repository';
import { CampusService } from './campus.service';

@Module({
  imports: [TypeOrmModule.forFeature([CampusRepository])],
  providers: [CampusService],
})
export class CampusModule {}
