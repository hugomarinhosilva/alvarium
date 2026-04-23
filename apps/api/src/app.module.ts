import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { AuditLogsModule } from "./modules/audit-logs/audit-logs.module";
import { AuthModule } from "./modules/auth/auth.module";
import { AuthGuard } from "./modules/auth/guards/auth.guard";
import { RolesGuard } from "./modules/auth/guards/roles.guard";
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
    AuthModule,
    UsersModule,
    PlansModule,
    HostingAccountsModule,
    NodesModule,
    AuditLogsModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ]
})
export class AppModule {}
