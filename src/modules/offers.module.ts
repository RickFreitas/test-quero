import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferRepostiroy } from '../repositories/offers.repository';
import { OffersService } from '../services/offers.service';

@Module({
  imports: [TypeOrmModule.forFeature([OfferRepostiroy])],
  providers: [OffersService],
})
export class OffersModule {}
