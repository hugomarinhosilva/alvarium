import { Injectable } from "@nestjs/common";
import {
  AuditLogActorType,
  Prisma,
  type AuditLog
} from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

type LogActionInput = {
  action: string;
  actorType?: AuditLogActorType;
  actorUserId?: string;
  ipAddress?: string | null;
  metadata?: Prisma.InputJsonValue;
  targetId?: string | null;
  targetType: string;
};

type LogUserActionInput = {
  action: string;
  actorUserId: string;
  ipAddress?: string | null;
  metadata?: Prisma.InputJsonValue;
  targetId?: string | null;
  targetType: string;
};

@Injectable()
export class AuditLogsService {
  constructor(private readonly prisma: PrismaService) {}

  create(input: LogActionInput): Promise<AuditLog> {
    return this.prisma.auditLog.create({
      data: {
        action: input.action,
        actorType: input.actorType ?? AuditLogActorType.USER,
        actorUserId: input.actorUserId ?? null,
        ipAddress: input.ipAddress ?? null,
        metadata: input.metadata,
        targetId: input.targetId ?? null,
        targetType: input.targetType
      }
    });
  }

  logUserAction(input: LogUserActionInput) {
    return this.create({
      action: input.action,
      actorType: AuditLogActorType.USER,
      actorUserId: input.actorUserId,
      ipAddress: input.ipAddress,
      metadata: input.metadata,
      targetId: input.targetId,
      targetType: input.targetType
    });
  }
}
