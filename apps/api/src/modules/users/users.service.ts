import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

const authUserSelect = {
  id: true,
  email: true,
  name: true,
  role: true,
  isActive: true,
  passwordHash: true
} as const;

const publicUserSelect = {
  id: true,
  email: true,
  name: true,
  role: true,
  isActive: true,
  lastLoginAt: true,
  createdAt: true,
  updatedAt: true
} as const;

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAuthByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: {
        email: {
          equals: email.trim().toLowerCase(),
          mode: "insensitive"
        }
      },
      select: authUserSelect
    });
  }

  findPublicById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: publicUserSelect
    });
  }

  updateLastLoginAt(id: string) {
    return this.prisma.user.update({
      where: { id },
      data: {
        lastLoginAt: new Date()
      },
      select: publicUserSelect
    });
  }
}

