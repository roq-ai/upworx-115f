interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upworx',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Apply for job offers', 'Edit personal information', 'View job offers', 'View contracts'],
  ownerAbilities: ['Manage contracts', 'Manage applications', 'Manage job offers', 'Manage companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/ae8ab783-58f6-401d-b16d-2530414d728c',
};
