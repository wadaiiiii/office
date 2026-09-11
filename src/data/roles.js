export const roles = {
  admin: {
    label: 'Administrator',
    permissions: ['manage_users','manage_modules','view_reports']
  },
  instructor: {
    label: 'Instructor',
    permissions: ['create_lessons','create_quiz','monitor_progress']
  },
  participant: {
    label: 'Participant',
    permissions: ['learn_modules','take_quiz','download_certificate']
  }
};
