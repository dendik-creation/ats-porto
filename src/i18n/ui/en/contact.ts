import type { ContactStrings } from '../../ui.types';

const contact: ContactStrings = {
  direct: 'Direct',
  email: 'Email',
  social: 'Social',
  freelance: 'Freelance',
  availability: 'Availability',
  openTo: 'Open to',
  openToValue: (region) => `Fullstack roles — remote or ${region}`,
  basedIn: 'Based in',
  basedInValue: (place) => `${place} · GMT+7`,
  replyTime: 'Reply time',
  replyTimeValue: 'Within a day, most days',
};

export default contact;
