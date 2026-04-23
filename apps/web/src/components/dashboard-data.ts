export type NavItem = {
  label: string;
  icon:
    | "grid"
    | "layers"
    | "server"
    | "shield"
    | "mail"
    | "list"
    | "spark"
    | "users";
  value?: string;
  active?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

export type SummaryCard = {
  label: string;
  value: string;
  change: string;
  icon: "refresh" | "pulse" | "clock" | "check";
  tone: "positive" | "warning" | "danger";
};

export type ScheduleEvent = {
  title: string;
  detail: string;
  time: string;
  attendees: string[];
};

export type WorkloadRow = {
  label: string;
  values: Array<0 | 1 | 2 | 3>;
};

export const navGroups: Array<{ title: string; items: NavItem[] }> = [
  {
    title: "General",
    items: [
      { label: "Dashboard", icon: "grid", active: true },
      { label: "Nodes", icon: "server", value: "26" },
      { label: "Accounts", icon: "layers", value: "214" },
      { label: "Email", icon: "mail", value: "19" },
      { label: "Audit", icon: "shield", value: "124" }
    ]
  },
  {
    title: "More",
    items: [
      { label: "To do lists", icon: "list" },
      { label: "AI assistants", icon: "spark" }
    ]
  }
];

export const teamMembers: TeamMember[] = [
  { name: "Dani Petry", role: "Infrastructure", initials: "DP" },
  { name: "Flux Academy", role: "Partner", initials: "FA" },
  { name: "Michelle Choi", role: "Security", initials: "MC" }
];

export const updatesOverview = {
  value: "1,892",
  caption: "total operational updates for this week",
  segments: [
    { label: "Incidents", value: "1,302", width: "72%" },
    { label: "Warnings", value: "6%", width: "16%" },
    { label: "Resolved", value: "4%", width: "12%" }
  ]
};

export const summaryCards: SummaryCard[] = [
  {
    label: "Iterations",
    value: "282",
    change: "+38.12% from previous week",
    icon: "refresh",
    tone: "positive"
  },
  {
    label: "KPI",
    value: "3.78",
    change: "-5.6% from previous week",
    icon: "pulse",
    tone: "danger"
  },
  {
    label: "Response",
    value: "4.8h",
    change: "+28.3% from previous week",
    icon: "clock",
    tone: "warning"
  },
  {
    label: "Finished",
    value: "94%",
    change: "+3.1% from previous week",
    icon: "check",
    tone: "positive"
  }
];

export const scheduleDays = [
  { label: "Mon", day: 16 },
  { label: "Tue", day: 17 },
  { label: "Wed", day: 18 },
  { label: "Thu", day: 19, active: true },
  { label: "Fri", day: 20 },
  { label: "Sat", day: 21 },
  { label: "Sun", day: 22 }
];

export const scheduleEvents: ScheduleEvent[] = [
  {
    title: "Business Analysis",
    detail: "Prepare a list of high-pressure nodes and accounts for the ops desk.",
    time: "09:30 AM",
    attendees: ["HK", "MC", "DP"]
  },
  {
    title: "Preparation of the MVP",
    detail: "Review dashboard flow, visual hierarchy and first delivery scope.",
    time: "07:15 AM",
    attendees: ["HM", "FA", "DP", "MC"]
  }
];

export const workloadLegend = ["Low", "Medium", "High", "Fully occupied"];

export const workloadRows: WorkloadRow[] = [
  { label: "GRU", values: [1, 1, 0, 1, 1, 3, 0, 1, 1, 1, 1, 1] },
  { label: "IAD", values: [0, 3, 1, 1, 3, 2, 2, 0, 3, 0, 1, 1] },
  { label: "FRA", values: [0, 3, 2, 2, 3, 2, 3, 2, 3, 0, 1, 1] },
  { label: "LHR", values: [0, 3, 0, 3, 3, 2, 0, 3, 3, 0, 1, 1] },
  { label: "AMS", values: [1, 1, 0, 3, 2, 1, 1, 3, 3, 0, 1, 1] }
];

export const workloadDays = ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"];
