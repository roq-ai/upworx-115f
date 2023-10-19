import { CompanyInterface } from 'interfaces/company';
import { JobOfferInterface } from 'interfaces/job-offer';
import { GetQueryInterface } from 'interfaces';

export interface ContractInterface {
  id?: string;
  contract_status?: string;
  company_id: string;
  job_offer_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  job_offer?: JobOfferInterface;
  _count?: {};
}

export interface ContractGetQueryInterface extends GetQueryInterface {
  id?: string;
  contract_status?: string;
  company_id?: string;
  job_offer_id?: string;
}
