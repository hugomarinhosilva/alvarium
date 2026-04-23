export type ServiceName = "web" | "api" | "agent";

export type ServiceStatus = "ready" | "degraded" | "down";

export interface ServiceInfo {
  name: ServiceName;
  status: ServiceStatus;
}
