import { ReactNode } from "react";

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="badge">{children}</span>;
}
