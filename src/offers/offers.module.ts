import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferRepostiroy } from './offers.repository';
import { OffersService } from './offers.service';

@Module({
  imports: [TypeOrmModule.forFeature([OfferRepostiroy])],
  providers: [OffersService],
})
export class OffersModule {}
