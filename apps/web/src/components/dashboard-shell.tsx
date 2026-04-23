"use client";

import { useEffect, useState } from "react";
import {
  accounts,
  alerts,
  metrics,
  sidebarItems
} from "./dashboard-data";

type Theme = "light" | "dark";

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("alvarium-theme");
    const preferredTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setTheme(preferredTheme);
    applyTheme(preferredTheme);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem("alvarium-theme", nextTheme);
  }

  return (
    <button
      aria-label="Toggle color mode"
      className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--background-strong)] px-4 py-3 text-sm font-medium text-[var(--text)] shadow-[var(--shadow)] transition hover:-translate-y-0.5"
      onClick={toggleTheme}
      type="button"
    >
      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
      {mounted ? (theme === "dark" ? "Dark mode" : "Light mode") : "Theme"}
    </button>
  );
}

function SearchBar() {
  return (
    <label className="flex w-full items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background-strong)] px-4 py-3 shadow-[var(--shadow)]">
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-faint)]">
        Search
      </span>
      <input
        className="w-full border-0 bg-transparent p-0 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-faint)]"
        placeholder="Search accounts, nodes, alerts..."
        type="search"
      />
    </label>
  );
}

function TopbarAlerts() {
  return (
    <button
      className="inline-flex min-w-44 items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--background-strong)] px-4 py-3 text-left shadow-[var(--shadow)] transition hover:-translate-y-0.5"
      type="button"
    >
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-faint)]">
          Alerts
        </span>
        <span className="mt-1 block text-sm font-semibold text-[var(--text)]">
          3 open incidents
        </span>
      </span>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-sm font-semibold text-[var(--primary-strong)]">
        03
      </span>
    </button>
  );
}

function Sidebar() {
  return (
    <aside className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--background-soft)] p-5 shadow-[var(--shadow)] backdrop-blur xl:min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Alvarium
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-[var(--text)]">
            Guardian Console
          </h1>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-strong)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-faint)]">
          beta
        </div>
      </div>

      <div className="mt-8 rounded-[24px] border border-[var(--border)] bg-[var(--background-strong)] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-faint)]">
          Control plane
        </p>
        <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">
          One place to watch system health, isolate incidents and understand who
          is pressuring your infrastructure.
        </p>
      </div>

      <nav className="mt-8 flex gap-3 overflow-x-auto xl:flex-col">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex min-w-44 items-center justify-between rounded-2xl border px-4 py-3 text-left transition xl:min-w-0",
              item.active
                ? "border-transparent bg-[var(--primary-strong)] text-[var(--background)] shadow-[var(--shadow)]"
                : "border-[var(--border)] bg-[var(--background-strong)] text-[var(--text)] hover:-translate-y-0.5"
            )}
            type="button"
          >
            <span className="text-sm font-medium">{item.label}</span>
            <span
              className={cn(
                "rounded-full px-2.5 py-1 text-xs font-semibold",
                item.active
                  ? "bg-white/15 text-white"
                  : "bg-[var(--background-muted)] text-[var(--text-faint)]"
              )}
            >
              {item.value}
            </span>
          </button>
        ))}
      </nav>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
        <div className="rounded-[24px] border border-[var(--border)] bg-[var(--background-strong)] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-faint)]">
            Node status
          </p>
          <p className="mt-3 text-3xl font-semibold text-[var(--text)]">24/26</p>
          <p className="mt-2 text-sm text-[var(--text-soft)]">
            Healthy nodes online with replication within acceptable latency.
          </p>
        </div>

        <div className="rounded-[24px] border border-[var(--border)] bg-[var(--background-strong)] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-faint)]">
            Response target
          </p>
          <p className="mt-3 text-3xl font-semibold text-[var(--text)]">07m</p>
          <p className="mt-2 text-sm text-[var(--text-soft)]">
            Average time to triage critical operational alerts in the last 24h.
          </p>
        </div>
      </div>
    </aside>
  );
}

function HeroPanel() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--background-soft)] p-6 shadow-[var(--shadow)] backdrop-blur md:p-8">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[var(--primary-soft)] blur-3xl" />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Operational dashboard
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
            Clear visibility for nodes, accounts and incidents.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-soft)] md:text-base">
            This initial layout is focused on fast operator context: what is
            wrong, where it is happening and which accounts need immediate
            attention.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-strong)] px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-faint)]">
              Nodes watched
            </p>
            <p className="mt-2 text-2xl font-semibold text-[var(--text)]">26</p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-strong)] px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-faint)]">
              Disk pressure
            </p>
            <p className="mt-2 text-2xl font-semibold text-[var(--text)]">
              2 zones
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-strong)] px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-faint)]">
              Mail events
            </p>
            <p className="mt-2 text-2xl font-semibold text-[var(--text)]">
              184/min
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
      {metrics.map((metric) => (
        <article
          key={metric.label}
          className="rounded-[28px] border border-[var(--border)] bg-[var(--background-soft)] p-5 shadow-[var(--shadow)] backdrop-blur"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-faint)]">
                {metric.label}
              </p>
              <p className="mt-3 text-4xl font-semibold tracking-tight text-[var(--text)]">
                {metric.value}
              </p>
            </div>
            <span
              className={cn(
                "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                metric.tone === "positive" && "bg-emerald-500/15 text-emerald-500",
                metric.tone === "warning" && "bg-amber-500/15 text-amber-500",
                metric.tone === "neutral" && "bg-sky-500/15 text-sky-500"
              )}
            >
              Live
            </span>
          </div>
          <p className="mt-4 text-sm text-[var(--text-soft)]">{metric.delta}</p>
        </article>
      ))}
    </section>
  );
}

function AlertsList() {
  return (
    <section className="rounded-[30px] border border-[var(--border)] bg-[var(--background-soft)] p-6 shadow-[var(--shadow)] backdrop-blur">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">
            Alert feed
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">
            Incidents requiring operator attention
          </h3>
        </div>
        <p className="text-sm text-[var(--text-soft)]">
          Mocked operational signals for the initial dashboard foundation.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {alerts.map((alert) => (
          <article
            key={alert.id}
            className="rounded-[24px] border border-[var(--border)] bg-[var(--background-strong)] p-5"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
                      alert.severity === "critical" && "bg-red-500/15 text-red-500",
                      alert.severity === "warning" && "bg-amber-500/15 text-amber-500",
                      alert.severity === "info" && "bg-sky-500/15 text-sky-500"
                    )}
                  >
                    {alert.severity}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-faint)]">
                    {alert.scope}
                  </span>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-[var(--text)]">
                  {alert.title}
                </h4>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--text-soft)]">
                  {alert.detail}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[var(--background-muted)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-faint)]">
                  {alert.id}
                </span>
                <span className="text-sm text-[var(--text-soft)]">{alert.time}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function statusTone(status: "stable" | "watch" | "risk") {
  if (status === "risk") {
    return "bg-red-500/15 text-red-500";
  }

  if (status === "watch") {
    return "bg-amber-500/15 text-amber-500";
  }

  return "bg-emerald-500/15 text-emerald-500";
}

function AccountsTable() {
  return (
    <section className="rounded-[30px] border border-[var(--border)] bg-[var(--background-soft)] p-6 shadow-[var(--shadow)] backdrop-blur">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">
            Accounts
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">
            Tenant pressure table
          </h3>
        </div>
        <p className="text-sm text-[var(--text-soft)]">
          Snapshot of accounts that matter most for current operations.
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--background-strong)]">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[var(--border)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-faint)]">
                <th className="px-5 py-4">Account</th>
                <th className="px-5 py-4">Owner</th>
                <th className="px-5 py-4">Plan</th>
                <th className="px-5 py-4">Node</th>
                <th className="px-5 py-4">Disk</th>
                <th className="px-5 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr
                  key={account.id}
                  className="border-b border-[var(--border)] last:border-b-0"
                >
                  <td className="px-5 py-4">
                    <div>
                      <p className="font-semibold text-[var(--text)]">
                        {account.name}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--text-faint)]">
                        {account.id}
                      </p>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-[var(--text-soft)]">
                    {account.owner}
                  </td>
                  <td className="px-5 py-4 text-sm text-[var(--text-soft)]">
                    {account.plan}
                  </td>
                  <td className="px-5 py-4 text-sm text-[var(--text-soft)]">
                    {account.node}
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-[var(--text)]">
                    {account.diskUsage}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={cn(
                        "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
                        statusTone(account.status)
                      )}
                    >
                      {account.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function DashboardShell() {
  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    applyTheme(currentTheme);
  }, []);

  return (
    <main className="mx-auto min-h-screen max-w-[1600px] px-4 py-4 md:px-6 md:py-6 xl:px-8">
      <div className="grid gap-4 xl:grid-cols-[280px_minmax(0,1fr)]">
        <Sidebar />

        <div className="space-y-4">
          <header className="flex flex-col gap-4 rounded-[28px] border border-[var(--border)] bg-[var(--background-soft)] p-4 shadow-[var(--shadow)] backdrop-blur lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full flex-col gap-4 lg:max-w-2xl lg:flex-row">
              <SearchBar />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <TopbarAlerts />
              <ThemeToggle />
            </div>
          </header>

          <HeroPanel />
          <MetricCards />

          <div className="grid gap-4 2xl:grid-cols-[1.1fr_0.9fr]">
            <AlertsList />
            <AccountsTable />
          </div>
        </div>
      </div>
    </main>
  );
}
