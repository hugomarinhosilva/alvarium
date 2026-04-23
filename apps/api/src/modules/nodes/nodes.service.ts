import { Injectable } from "@nestjs/common";
import { NodeStatus, type Node, type Prisma } from "@prisma/client";
import { AuditLogsService } from "../audit-logs/audit-logs.service";
import { auditActions } from "../audit-logs/constants/audit-actions";
import { AuthenticatedUser } from "../auth/types/authenticated-user";
import { PrismaService } from "../prisma/prisma.service";
import { RegisterNodeDto } from "./dto/register-node.dto";

@Injectable()
export class NodesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly auditLogsService: AuditLogsService
  ) {}

  async register(
    input: RegisterNodeDto,
    actor: AuthenticatedUser,
    ipAddress?: string
  ): Promise<Node> {
    const node = await this.prisma.node.create({
      data: {
        hostname: input.hostname,
        ipv4: input.ipv4,
        location: input.location,
        name: input.name,
        slug: input.slug,
        status: NodeStatus.ONLINE,
        isActive: true
      }
    });

    await this.auditLogsService.logUserAction({
      action: auditActions.nodeRegister,
      actorUserId: actor.sub,
      ipAddress,
      metadata: {
        hostname: node.hostname,
        ipv4: node.ipv4,
        location: node.location
      } satisfies Prisma.JsonObject,
      targetId: node.id,
      targetType: "node"
    });

    return node;
  }
}

