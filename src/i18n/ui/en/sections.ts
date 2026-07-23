import type { SectionsStrings } from '../../ui.types';

const sections: SectionsStrings = {
  about: { title: 'About', kicker: 'Who / Where' },
  skills: { title: 'Stack', kicker: 'What I build with' },
  projects: { title: 'Selected work', kicker: (count) => `${count} projects` },
  experience: { title: 'Experience', kicker: "Where I've shipped" },
  volunteer: { title: 'Volunteer', kicker: 'Beyond the job' },
  certifications: { title: 'Certifications', kicker: 'Verified skills' },
  languages: { title: 'Languages', kicker: 'How I communicate' },
  contact: { title: "Let's build something", kicker: 'Get in touch' },
};

export default sections;
