import type { Project } from "../types/project";

export const projects: Project[] = [
  {
  title: "Catalogue Import Review",
  description:
    "A full-stack tool for checking product catalogue CSVs before import. Review errors by row, filter by field, download an error report, and revalidate the corrected file.",
  image: "/project-images/catalog-import-review.png",
  technologies: ["React", "TypeScript", "Python", "FastAPI"],
  sourceUrl: "https://github.com/snirvi/catalog-import-review",
  status: "completed",
},
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