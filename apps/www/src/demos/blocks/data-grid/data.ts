import type { ColumnDef } from "@tanstack/react-table";
import type { DataGridFeatures } from "@/registry/base/lib/data-grid-features";
import { getFilterFn } from "@/registry/base/lib/data-grid-filters";

export type Employee = {
  id: string;
  name?: string;
  department?: string;
  skills?: string[];
  salary?: number;
  active?: boolean;
  startDate?: string;
  website?: string;
  notes?: string;
};

const NAMES = [
  "Bat-Erdene Tsogt",
  "Anujin Ganbold",
  "Temuulen Bold",
  "Nomin-Erdene Bat",
  "Khulan Dorj",
  "Enkhjin Munkh",
  "Tuvshin Erdene",
  "Saruul Ochir",
  "Maralmaa Gan",
  "Zolboo Baatar",
];
const DEPARTMENTS = [
  "engineering",
  "design",
  "product",
  "finance",
  "operations",
];
const SKILLS = ["react", "typescript", "go", "figma", "sql", "devops"];

export const employees: Employee[] = Array.from({ length: 20 }, (_, i) => ({
  id: `emp-${i + 1}`,
  name: NAMES[i % NAMES.length],
  department: DEPARTMENTS[i % DEPARTMENTS.length],
  skills: [
    SKILLS[i % SKILLS.length],
    SKILLS[(i * 3 + 1) % SKILLS.length],
  ].filter((skill, index, all) => all.indexOf(skill) === index),
  salary: 2_400_000 + ((i * 370_000) % 4_800_000),
  active: i % 4 !== 0,
  startDate: `202${i % 6}-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 27) + 1).padStart(2, "0")}`,
  website: `https://ailab.mn/team/${i + 1}`,
  notes: i % 3 === 0 ? "Onboarding buddy for new hires." : "",
}));

const filterFn = getFilterFn<Employee>();

export const employeeColumns: ColumnDef<DataGridFeatures, Employee>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Name",
    filterFn,
    meta: { label: "Name", cell: { variant: "short-text" } },
    minSize: 180,
  },
  {
    id: "department",
    accessorKey: "department",
    header: "Department",
    filterFn,
    meta: {
      label: "Department",
      cell: {
        variant: "select",
        options: DEPARTMENTS.map((value) => ({
          label: value[0].toUpperCase() + value.slice(1),
          value,
        })),
      },
    },
    minSize: 150,
  },
  {
    id: "skills",
    accessorKey: "skills",
    header: "Skills",
    filterFn,
    meta: {
      label: "Skills",
      cell: {
        variant: "multi-select",
        options: SKILLS.map((value) => ({ label: value, value })),
      },
    },
    minSize: 200,
  },
  {
    id: "salary",
    accessorKey: "salary",
    header: "Salary (₮)",
    filterFn,
    meta: {
      label: "Salary (₮)",
      cell: { variant: "number", min: 0, step: 100_000 },
    },
    minSize: 140,
  },
  {
    id: "active",
    accessorKey: "active",
    header: "Active",
    filterFn,
    meta: { label: "Active", cell: { variant: "checkbox" } },
    minSize: 100,
  },
  {
    id: "startDate",
    accessorKey: "startDate",
    header: "Start date",
    filterFn,
    meta: { label: "Start date", cell: { variant: "date" } },
    minSize: 140,
  },
  {
    id: "website",
    accessorKey: "website",
    header: "Profile",
    filterFn,
    meta: { label: "Profile", cell: { variant: "url" } },
    minSize: 220,
  },
  {
    id: "notes",
    accessorKey: "notes",
    header: "Notes",
    filterFn,
    meta: { label: "Notes", cell: { variant: "long-text" } },
    minSize: 220,
  },
];
