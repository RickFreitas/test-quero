import { EntityRepository, Repository } from 'typeorm';
import { Offer } from './offers.entity';

@EntityRepository(Offer)
export class OfferRepostiroy extends Repository<Offer> {}
