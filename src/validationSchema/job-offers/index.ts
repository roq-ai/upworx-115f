import * as yup from 'yup';

export const jobOfferValidationSchema = yup.object().shape({
  salary_range: yup.string().nullable(),
  job_description: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
});
