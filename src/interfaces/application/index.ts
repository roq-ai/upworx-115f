import { UserInterface } from 'interfaces/user';
import { JobOfferInterface } from 'interfaces/job-offer';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  freelancer_id: string;
  job_offer_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  job_offer?: JobOfferInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  freelancer_id?: string;
  job_offer_id?: string;
}
