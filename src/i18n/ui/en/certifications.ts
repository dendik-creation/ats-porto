import type { CertificationsStrings } from '../../ui.types';

const certifications: CertificationsStrings = {
  credentialIdLabel: 'ID',
  verifyCredential: 'Verify credential',
  typeCertification: 'Certification',
  typeAward: 'Award',
  openImageAria: (name) => `Open certificate image: ${name}`,
  imageAlt: (name) => `Certificate image for ${name}`,
  lightboxName: 'Certifications & Awards',
};

export default certifications;
