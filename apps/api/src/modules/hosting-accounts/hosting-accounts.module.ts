import { Module } from "@nestjs/common";
import { AuditLogsModule } from "../audit-logs/audit-logs.module";
import { HostingAccountsController } from "./hosting-accounts.controller";
import { HostingAccountsService } from "./hosting-accounts.service";

@Module({
  imports: [AuditLogsModule],
  controllers: [HostingAccountsController],
  providers: [HostingAccountsService]
})
export class HostingAccountsModule {}

