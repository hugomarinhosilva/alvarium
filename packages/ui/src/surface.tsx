import type { ReactNode } from "react";

type SurfaceProps = {
  title: string;
  children: ReactNode;
};

export function Surface({ title, children }: SurfaceProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur">
      <p className="text-sm font-medium text-sky-300">{title}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{children}</p>
    </article>
  );
}
