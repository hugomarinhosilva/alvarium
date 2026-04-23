"use client";

import { useEffect, useState } from "react";
import {
  navGroups,
  scheduleDays,
  scheduleEvents,
  summaryCards,
  teamMembers,
  updatesOverview,
  workloadDays,
  workloadLegend,
  workloadRows
} from "./dashboard-data";

type Theme = "light" | "dark";

type IconName =
  | "grid"
  | "layers"
  | "server"
  | "shield"
  | "mail"
  | "list"
  | "spark"
  | "users"
  | "search"
  | "calendar"
  | "moon"
  | "bell"
  | "chevron-down"
  | "refresh"
  | "pulse"
  | "clock"
  | "check"
  | "arrow-right"
  | "plus";

function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function Icon({
  name,
  className
}: {
  name: IconName;
  className?: string;
}) {
  const base = "h-4 w-4";

  switch (name) {
    case "grid":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "layers":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="m12 4 8 4-8 4-8-4 8-4Zm8 8-8 4-8-4m16 4-8 4-8-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "server":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M4 6.5h16v4H4zm0 7h16v4H4z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M7 8.5h.01M7 15.5h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
        </svg>
      );
    case "shield":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M12 4 6 6v5c0 4.4 2.4 7.7 6 9 3.6-1.3 6-4.6 6-9V6l-6-2Z" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "mail":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="1.8" />
          <path d="m5 8 7 6 7-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "list":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M8 7h12M8 12h12M8 17h12M4.5 7h.01M4.5 12h.01M4.5 17h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    case "spark":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Zm6 12 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </svg>
      );
    case "users":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M16 19a4 4 0 0 0-8 0M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 7a4 4 0 0 0-3-3.87M16 6.13A3 3 0 0 1 16 12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    case "search":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="m20 20-4.2-4.2M10.8 17a6.2 6.2 0 1 0 0-12.4 6.2 6.2 0 0 0 0 12.4Z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    case "calendar":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M7 4v3M17 4v3M4 9h16M5 6h14v14H5z" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    case "moon":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a8 8 0 1 0 9.5 9.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "bell":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M15 17H5.5c1.2-1.1 2-2.6 2-4.3V10a4.5 4.5 0 1 1 9 0v2.7c0 1.7.8 3.2 2 4.3H15Zm0 0a3 3 0 0 1-6 0" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="m7 10 5 5 5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "refresh":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "pulse":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M3 12h4l2-4 4 9 2-5h6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "clock":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M12 7v5l3 2M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "check":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="m5 12 4.2 4.2L19 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "plus":
      return (
        <svg className={cn(base, className)} fill="none" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    default:
      return null;
  }
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
      className="dashboard-control"
      onClick={toggleTheme}
      type="button"
    >
      <Icon name="moon" />
      <span className="hidden sm:inline">{mounted ? (theme === "dark" ? "Dark" : "Light") : "Theme"}</span>
    </button>
  );
}

function LogoMark() {
  return (
    <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-[var(--accent)] shadow-[0_16px_28px_var(--accent-shadow)]">
      <span className="absolute left-[7px] top-[7px] h-3.5 w-3.5 rotate-45 rounded-[4px] bg-white/95" />
      <span className="absolute right-[7px] top-[7px] h-3.5 w-3.5 rotate-45 rounded-[4px] bg-white/85" />
      <span className="absolute bottom-[7px] left-[13px] h-3.5 w-3.5 rotate-45 rounded-[4px] bg-white/90" />
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="dashboard-sidebar">
      <div className="flex items-center gap-3">
        <LogoMark />
        <div>
          <p className="text-lg font-semibold text-[var(--text)]">Alvarium</p>
          <p className="text-sm text-[var(--text-soft)]">Guardian workspace</p>
        </div>
      </div>

      {navGroups.map((group) => (
        <div key={group.title} className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-faint)]">
            {group.title}
          </p>

          <nav className="mt-3 space-y-2">
            {group.items.map((item) => (
              <button
                key={item.label}
                className={cn("sidebar-link", item.active && "sidebar-link-active")}
                type="button"
              >
                <span className="flex items-center gap-3">
                  <span className={cn("sidebar-icon", item.active && "sidebar-icon-active")}>
                    <Icon name={item.icon} />
                  </span>
                  <span>{item.label}</span>
                </span>
                {item.value ? (
                  <span className="text-sm text-[var(--text-faint)]">{item.value}</span>
                ) : null}
              </button>
            ))}
          </nav>
        </div>
      ))}

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-faint)]">
          Interactions
        </p>
        <div className="mt-3 space-y-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex items-center gap-3 rounded-2xl px-2 py-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--panel-elevated)] text-sm font-semibold text-[var(--text)]">
                {member.initials}
              </span>
              <div>
                <p className="text-sm font-medium text-[var(--text)]">{member.name}</p>
                <p className="text-xs text-[var(--text-soft)]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="upgrade-button mt-auto" type="button">
        <Icon name="arrow-right" />
        Upgrade to Pro
      </button>
    </aside>
  );
}

function SearchBar() {
  return (
    <label className="dashboard-search">
      <Icon className="text-[var(--text-faint)]" name="search" />
      <input placeholder="Preparation of technical specifications..." type="search" />
    </label>
  );
}

function Topbar() {
  return (
    <header className="dashboard-topbar">
      <SearchBar />

      <div className="flex flex-wrap items-center gap-3">
        <button className="dashboard-control" type="button">
          <Icon name="search" />
        </button>

        <button className="dashboard-control gap-3 px-4" type="button">
          <Icon name="calendar" />
          <span>Monthly</span>
          <Icon className="h-3 w-3" name="chevron-down" />
        </button>

        <ThemeToggle />

        <button className="dashboard-control" type="button">
          <span className="notification-dot">5</span>
          <Icon name="bell" />
        </button>

        <button className="dashboard-avatar" type="button">
          HM
        </button>
      </div>
    </header>
  );
}

function Greeting() {
  return (
    <section className="px-1 pt-2">
      <p className="text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-[var(--text)]">
        Hi, Hugo!
      </p>
      <p className="mt-2 text-[clamp(1.2rem,2.2vw,2.35rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--text)]">
        Let&apos;s customize your Alvarium workspace.
      </p>
    </section>
  );
}

function CardFrame({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={cn("dashboard-card", className)}>{children}</section>;
}

function CardHeader({
  label,
  icon,
  buttonLabel = "View all"
}: {
  label: string;
  icon: IconName;
  buttonLabel?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--panel-elevated)] text-[var(--text)]">
          <Icon name={icon} />
        </span>
        <p className="text-xl font-medium tracking-[-0.03em] text-[var(--text)]">{label}</p>
      </div>

      <button className="soft-button" type="button">
        {buttonLabel}
      </button>
    </div>
  );
}

function UpdatesCard() {
  return (
    <CardFrame className="lg:col-span-4">
      <CardHeader icon="refresh" label="Updates" />

      <div className="mt-8">
        <p className="text-6xl font-semibold tracking-[-0.05em] text-[var(--text)]">
          {updatesOverview.value}
        </p>
        <p className="mt-3 text-base text-[var(--text-soft)]">{updatesOverview.caption}</p>
      </div>

      <div className="mt-10 rounded-[2rem] bg-[var(--panel-elevated)] p-5">
        <div className="flex h-32 items-end gap-3">
          {updatesOverview.segments.map((segment, index) => (
            <div
              key={segment.label}
              className={cn(
                "relative rounded-[1.6rem]",
                index === 0
                  ? "flex-1 border border-[var(--stripe-border)] bg-[linear-gradient(135deg,var(--stripe-base)_0%,var(--stripe-base)_35%,transparent_35%,transparent_50%,var(--stripe-base)_50%,var(--stripe-base)_85%,transparent_85%,transparent_100%)] bg-[length:12px_12px]"
                  : "bg-[var(--accent)]"
              )}
              style={{ height: segment.width }}
            >
              {index === 0 ? (
                <div className="absolute left-4 top-3 rounded-2xl border border-white/20 bg-[var(--panel-floating)] px-4 py-2 text-[var(--text)]">
                  <p className="text-sm text-[var(--text-soft)]">{segment.label}</p>
                  <p className="text-4xl font-semibold tracking-[-0.05em]">{segment.value}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between text-sm font-medium text-[var(--text-soft)]">
          {updatesOverview.segments.map((segment) => (
            <span key={segment.label}>{segment.value}</span>
          ))}
        </div>
      </div>
    </CardFrame>
  );
}

function ShowcaseCard() {
  return (
    <CardFrame className="showcase-card lg:col-span-5">
      <div className="showcase-background" />
      <div className="showcase-glow" />
      <div className="showcase-panel">
        <p className="text-[clamp(1.8rem,2.8vw,2.8rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-white">
          Protect cloud operations
        </p>
        <p className="mt-4 max-w-sm text-base leading-7 text-white/74">
          Replace fragmented tooling with one control surface for nodes, accounts,
          alerts and human response.
        </p>
      </div>
    </CardFrame>
  );
}

function ScheduleCard() {
  return (
    <CardFrame className="lg:col-span-3">
      <div className="flex items-center justify-between">
        <button className="icon-button" type="button">
          &lt;
        </button>
        <p className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">
          February 2026
        </p>
        <button className="icon-button" type="button">
          &gt;
        </button>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-2 text-center">
        {scheduleDays.map((day) => (
          <div key={day.day}>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-faint)]">
              {day.label}
            </p>
            <div
              className={cn(
                "mt-3 grid h-10 place-items-center rounded-full text-lg font-semibold text-[var(--text)]",
                day.active && "bg-[var(--accent)] text-white shadow-[0_14px_28px_var(--accent-shadow)]"
              )}
            >
              {day.day}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {scheduleEvents.map((event) => (
          <div key={event.title} className="rounded-[1.7rem] border border-[var(--line)] bg-[var(--panel-elevated)] p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xl font-semibold tracking-[-0.03em] text-[var(--text)]">
                  {event.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">{event.detail}</p>
              </div>
              <button className="text-[var(--text-faint)]" type="button">
                ...
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex -space-x-2">
                {event.attendees.map((attendee) => (
                  <span
                    key={attendee}
                    className="grid h-8 w-8 place-items-center rounded-full border-2 border-[var(--panel-elevated)] bg-[var(--accent-soft)] text-[11px] font-semibold text-[var(--text)]"
                  >
                    {attendee}
                  </span>
                ))}
              </div>
              <p className="text-sm font-medium text-[var(--text-soft)]">{event.time}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="appointment-button mt-5" type="button">
        <Icon name="plus" />
        Make an appointment
      </button>
    </CardFrame>
  );
}

function SummaryCard({
  label,
  value,
  change,
  icon,
  tone
}: (typeof summaryCards)[number]) {
  return (
    <CardFrame className="min-h-[13rem]">
      <CardHeader buttonLabel="View all" icon={icon} label={label} />
      <div className="mt-10">
        <p className="text-6xl font-semibold tracking-[-0.05em] text-[var(--text)]">{value}</p>
        <p
          className={cn(
            "mt-3 text-sm font-medium",
            tone === "positive" && "text-[var(--success)]",
            tone === "warning" && "text-[var(--warning)]",
            tone === "danger" && "text-[var(--danger)]"
          )}
        >
          {change}
        </p>
      </div>
    </CardFrame>
  );
}

function WorkloadCard() {
  return (
    <CardFrame className="lg:col-span-2">
      <CardHeader icon="grid" label="Weekly Workload" />

      <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[var(--text-soft)]">
        {workloadLegend.map((item, index) => (
          <div key={item} className="flex items-center gap-2">
            <span
              className={cn(
                "h-2.5 w-2.5 rounded-full",
                index === 0 && "bg-[var(--heat-1)]",
                index === 1 && "bg-[var(--heat-2)]",
                index === 2 && "bg-[var(--heat-3)]",
                index === 3 && "bg-[var(--heat-4)]"
              )}
            />
            {item}
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {workloadRows.map((row) => (
          <div key={row.label} className="grid grid-cols-[2.4rem_minmax(0,1fr)] items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--text-soft)]">
              {row.label}
            </span>

            <div className="grid grid-cols-12 gap-2">
              {row.values.map((value, index) => (
                <span
                  key={`${row.label}-${index}`}
                  className={cn(
                    "h-11 rounded-[0.85rem] border border-[var(--line)]",
                    value === 0 &&
                      "bg-[linear-gradient(135deg,var(--stripe-base)_0%,var(--stripe-base)_35%,transparent_35%,transparent_50%,var(--stripe-base)_50%,var(--stripe-base)_85%,transparent_85%,transparent_100%)] bg-[length:10px_10px]",
                    value === 1 && "bg-[var(--heat-2)]",
                    value === 2 && "bg-[var(--heat-3)]",
                    value === 3 && "bg-[var(--heat-4)] shadow-[0_14px_26px_var(--accent-shadow)]"
                  )}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-[2.4rem_minmax(0,1fr)] items-center gap-3">
        <span />
        <div className="grid grid-cols-12 gap-2 text-center text-sm font-medium text-[var(--text-soft)]">
          {workloadDays.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
      </div>
    </CardFrame>
  );
}

export function DashboardShell() {
  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    applyTheme(currentTheme);
  }, []);

  return (
    <main className="mx-auto min-h-screen max-w-[1720px] px-3 py-3 sm:px-5 sm:py-5 xl:px-8">
      <div className="dashboard-board">
        <Sidebar />

        <section className="dashboard-main">
          <Topbar />
          <Greeting />

          <div className="mt-6 grid gap-4 lg:grid-cols-12">
            <UpdatesCard />
            <ShowcaseCard />
            <ScheduleCard />
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2 2xl:grid-cols-[repeat(2,minmax(0,1fr))_1.65fr]">
            {summaryCards.map((card) => (
              <SummaryCard key={card.label} {...card} />
            ))}
            <WorkloadCard />
          </div>
        </section>
      </div>
    </main>
  );
}
