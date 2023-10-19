import * as yup from 'yup';

export const contractValidationSchema = yup.object().shape({
  contract_status: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
  job_offer_id: yup.string().nullable().required(),
});
