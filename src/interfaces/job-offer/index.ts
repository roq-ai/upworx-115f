import { ApplicationInterface } from 'interfaces/application';
import { ContractInterface } from 'interfaces/contract';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobOfferInterface {
  id?: string;
  salary_range?: string;
  job_description?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  contract?: ContractInterface[];
  company?: CompanyInterface;
  _count?: {
    application?: number;
    contract?: number;
  };
}

export interface JobOfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  salary_range?: string;
  job_description?: string;
  company_id?: string;
}
