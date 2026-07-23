import type { ContactStrings } from '../../ui.types';

const contact: ContactStrings = {
  direct: 'Langsung',
  email: 'Email',
  social: 'Sosial',
  freelance: 'Freelance',
  availability: 'Ketersediaan',
  openTo: 'Terbuka untuk',
  openToValue: (region) => `Peran fullstack — remote atau ${region}`,
  basedIn: 'Berbasis di',
  basedInValue: (place) => `${place} · GMT+7`,
  replyTime: 'Waktu balas',
  replyTimeValue: 'Dalam sehari, hampir selalu',
};

export default contact;
