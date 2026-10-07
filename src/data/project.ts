import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Household Expense Tracker",
    description:
      "A full-stack personal finance application for tracking transactions, budgets, projects, credit scores and monthly spending insights.",
    image: "/project-images/expense-tracker.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "SQLite",
      "Recharts",
    ],
    sourceUrl: "https://github.com/snirvi/expense-tracker",
    status: "in-progress",
  },
];