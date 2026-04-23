import { Module } from "@nestjs/common";
import { AuditLogsModule } from "../audit-logs/audit-logs.module";
import { NodesController } from "./nodes.controller";
import { NodesService } from "./nodes.service";

@Module({
  imports: [AuditLogsModule],
  controllers: [NodesController],
  providers: [NodesService]
})
export class NodesModule {}

