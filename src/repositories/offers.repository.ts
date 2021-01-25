import { EntityRepository, Repository } from 'typeorm';
import { Offer } from '../models/offers.entity';

@EntityRepository(Offer)
export class OfferRepostiroy extends Repository<Offer> {}
