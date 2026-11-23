export const STORAGE_KEY = "lspu-siems-demo-v1";
export const SESSION_KEY = "lspu-siems-demo-session";
export const THEME_KEY = "lspu-siems-theme";
export const DEFAULT_ADMIN_PASSWORD = "LspuAdmin2026!";
export const ADMIN_EMAIL = "admin@lspu.edu.ph";
export const COURSE_ENROLLMENT_CAPACITY = 100;

export const COURSE_OPTIONS = [
  "Bachelor of Science in Information Technology",
  "Bachelor of Science in Business Administration",
  "Bachelor of Elementary Education",
  "Bachelor of Secondary Education",
  "Bachelor of Science in Computer Science",
  "Bachelor of Science in Psychology",
  "Bachelor of Science in Hospitality Management",
  "Bachelor of Science in Industrial Technology",
  "Bachelor of Science in Agriculture"
];

export const navItems = {
  student: [
    ["student-home", "Home", "⌂"],
    ["my-information", "My Information", "◉"],
    ["my-enrollment", "My Enrollment", "▤"],
    ["my-schedule", "My Schedule", "◷"]
  ],
  admin: [
    ["admin-dashboard", "Dashboard", "⌂"],
    ["admin-students", "Students", "◉"],
    ["admin-enrollments", "Enrollments", "▤"],
    ["admin-schedules", "Class Schedule", "◷"],
    ["admin-accounts", "User Accounts", "♙"]
  ]
};
