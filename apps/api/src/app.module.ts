import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { AuditLogsModule } from "./modules/audit-logs/audit-logs.module";
import { HostingAccountsModule } from "./modules/hosting-accounts/hosting-accounts.module";
import { NodesModule } from "./modules/nodes/nodes.module";
import { PlansModule } from "./modules/plans/plans.module";
import { PrismaModule } from "./modules/prisma/prisma.module";
import { SystemModule } from "./modules/system/system.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env.local", ".env"]
    }),
    PrismaModule,
    SystemModule,
    UsersModule,
    PlansModule,
    HostingAccountsModule,
    NodesModule,
    AuditLogsModule
  ]
})
export class AppModule {}
