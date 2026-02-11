export const roles = {
  STUDENT: 'student',
  INSTRUCTOR: 'instructor',
  RECRUITER: 'recruiter',
  ADMIN: 'admin'
};

export const permissions = {
  // Define granular permissions if needed
  MANAGE_USERS: 'manage_users',
  MANAGE_COURSES: 'manage_courses',
  MANAGE_JOBS: 'manage_jobs'
};

export const roleList = Object.values(roles);
