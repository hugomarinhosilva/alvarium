export type Metric = {
  label: string;
  value: string;
  delta: string;
  tone: "neutral" | "positive" | "warning";
};

export type AlertItem = {
  id: string;
  title: string;
  scope: string;
  severity: "critical" | "warning" | "info";
  detail: string;
  time: string;
};

export type AccountRow = {
  id: string;
  name: string;
  owner: string;
  plan: string;
  node: string;
  diskUsage: string;
  status: "stable" | "watch" | "risk";
};

export type SidebarItem = {
  label: string;
  value: string;
  active?: boolean;
};

export const sidebarItems: SidebarItem[] = [
  { label: "Overview", value: "01", active: true },
  { label: "Nodes", value: "08" },
  { label: "Accounts", value: "214" },
  { label: "Email", value: "19" },
  { label: "Audit", value: "124" }
] as const;

export const metrics: Metric[] = [
  {
    label: "System health",
    value: "98.4%",
    delta: "+1.2% this week",
    tone: "positive"
  },
  {
    label: "Critical alerts",
    value: "03",
    delta: "2 require action now",
    tone: "warning"
  },
  {
    label: "Hot accounts",
    value: "12",
    delta: "CPU and mail spikes",
    tone: "warning"
  },
  {
    label: "Email activity",
    value: "1.28M",
    delta: "+8.4% vs yesterday",
    tone: "neutral"
  }
];

export const alerts: AlertItem[] = [
  {
    id: "ALT-001",
    title: "Mail queue spike detected",
    scope: "node-fra-02",
    severity: "critical",
    detail: "Outgoing queue grew 340% in 15 minutes and two tenants crossed soft limits.",
    time: "2 min ago"
  },
  {
    id: "ALT-002",
    title: "Disk usage above threshold",
    scope: "account / aurora-commerce",
    severity: "warning",
    detail: "Disk usage reached 86% after backup retention drift on shared storage.",
    time: "14 min ago"
  },
  {
    id: "ALT-003",
    title: "Unusual login pattern",
    scope: "operator / infra-team",
    severity: "info",
    detail: "New login source detected from a trusted token with elevated access scope.",
    time: "33 min ago"
  }
];

export const accounts: AccountRow[] = [
  {
    id: "AC-1001",
    name: "aurora-commerce",
    owner: "A. Costa",
    plan: "Business Pro",
    node: "node-fra-02",
    diskUsage: "86%",
    status: "risk"
  },
  {
    id: "AC-1002",
    name: "nova-mail",
    owner: "Equipe Nova",
    plan: "Mail Cluster",
    node: "node-gru-01",
    diskUsage: "42%",
    status: "watch"
  },
  {
    id: "AC-1003",
    name: "delta-analytics",
    owner: "R. Lima",
    plan: "Enterprise",
    node: "node-iad-03",
    diskUsage: "27%",
    status: "stable"
  },
  {
    id: "AC-1004",
    name: "atlas-hosting",
    owner: "Ops Team",
    plan: "Reseller",
    node: "node-fra-01",
    diskUsage: "63%",
    status: "watch"
  }
];
