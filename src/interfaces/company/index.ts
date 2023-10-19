import { ContractInterface } from 'interfaces/contract';
import { JobOfferInterface } from 'interfaces/job-offer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  contract?: ContractInterface[];
  job_offer?: JobOfferInterface[];
  user?: UserInterface;
  _count?: {
    contract?: number;
    job_offer?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
