export type Task = {
  id: string;
  code: string;
  title: string;
  status: "todo" | "in-progress" | "done" | "canceled";
  priority: "low" | "medium" | "high";
  estimatedHours: number;
  createdAt: Date;
};

const TITLES = [
  "Migrate billing to the new API",
  "Fix flaky login test",
  "Write onboarding docs",
  "Audit dependency licenses",
  "Add dark mode to settings",
  "Speed up the search index",
  "Refactor the payment form",
  "Review accessibility report",
  "Clean up feature flags",
  "Set up error alerts",
];
const STATUSES: Task["status"][] = ["todo", "in-progress", "done", "canceled"];
const PRIORITIES: Task["priority"][] = ["low", "medium", "high"];

// Deterministic, so server and client render the same rows.
export const TASKS: Task[] = Array.from({ length: 48 }, (_, index) => ({
  id: `task-${index + 1}`,
  code: `TASK-${String(1001 + index)}`,
  title: TITLES[index % TITLES.length],
  status: STATUSES[(index * 7) % STATUSES.length],
  priority: PRIORITIES[(index * 5) % PRIORITIES.length],
  estimatedHours: ((index * 13) % 24) + 1,
  createdAt: new Date(Date.UTC(2026, 0, 1 + ((index * 3) % 270))),
}));
