import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import type { JwtSignOptions } from "@nestjs/jwt";
import { AuditLogsModule } from "../audit-logs/audit-logs.module";
import { UsersModule } from "../users/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { HashingService } from "./services/hashing.service";

@Module({
  imports: [
    ConfigModule,
    AuditLogsModule,
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>("JWT_ACCESS_SECRET"),
        signOptions: {
          expiresIn: configService.get<string>("JWT_ACCESS_TTL", "15m") as JwtSignOptions["expiresIn"]
        }
      })
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, HashingService],
  exports: [AuthService, HashingService]
})
export class AuthModule {}
