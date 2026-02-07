/**
 * Centralized Data Exports
 * Import from '@/data' or '../data' to access all site data
 */

// Site configuration (contact, social, company info)
export {
  siteConfig,
  getMailtoLink,
  getPhoneLink,
  getWhatsappLink,
  type SiteConfig,
} from './config';

// Team data (founders, instructors, values)
export {
  founders,
  instructors,
  companyValues,
  getFounderById,
  getInstructorsForWorkshop,
  type TeamMember,
} from './team';
