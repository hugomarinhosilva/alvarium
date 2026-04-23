import { Injectable } from "@nestjs/common";
import {
  HostingAccountStatus,
  type HostingAccount,
  type Prisma
} from "@prisma/client";
import { AuditLogsService } from "../audit-logs/audit-logs.service";
import { auditActions } from "../audit-logs/constants/audit-actions";
import { PrismaService } from "../prisma/prisma.service";
import { AuthenticatedUser } from "../auth/types/authenticated-user";
import { CreateHostingAccountDto } from "./dto/create-hosting-account.dto";
import { SuspendHostingAccountDto } from "./dto/suspend-hosting-account.dto";

@Injectable()
export class HostingAccountsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly auditLogsService: AuditLogsService
  ) {}

  async create(
    input: CreateHostingAccountDto,
    actor: AuthenticatedUser,
    ipAddress?: string
  ): Promise<HostingAccount> {
    const account = await this.prisma.hostingAccount.create({
      data: {
        userId: input.userId,
        planId: input.planId,
        nodeId: input.nodeId,
        label: input.label,
        domain: input.domain,
        username: input.username,
        status: HostingAccountStatus.ACTIVE,
        isActive: true
      }
    });

    await this.auditLogsService.logUserAction({
      action: auditActions.hostingAccountCreate,
      actorUserId: actor.sub,
      ipAddress,
      metadata: {
        domain: account.domain,
        nodeId: account.nodeId,
        planId: account.planId,
        userId: account.userId,
        username: account.username
      } satisfies Prisma.JsonObject,
      targetId: account.id,
      targetType: "hosting_account"
    });

    return account;
  }

  async suspend(
    id: string,
    input: SuspendHostingAccountDto,
    actor: AuthenticatedUser,
    ipAddress?: string
  ): Promise<HostingAccount> {
    const account = await this.prisma.hostingAccount.update({
      where: { id },
      data: {
        isActive: false,
        status: HostingAccountStatus.SUSPENDED
      }
    });

    await this.auditLogsService.logUserAction({
      action: auditActions.hostingAccountSuspend,
      actorUserId: actor.sub,
      ipAddress,
      metadata: {
        reason: input.reason ?? null,
        status: account.status
      } satisfies Prisma.JsonObject,
      targetId: account.id,
      targetType: "hosting_account"
    });

    return account;
  }
}

