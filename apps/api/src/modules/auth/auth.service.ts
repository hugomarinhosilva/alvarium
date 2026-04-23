import {
  ForbiddenException,
  Injectable,
  UnauthorizedException
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserRole } from "@prisma/client";
import { AuditLogsService } from "../audit-logs/audit-logs.service";
import { auditActions } from "../audit-logs/constants/audit-actions";
import { UsersService } from "../users/users.service";
import { LoginDto } from "./dto/login.dto";
import { HashingService } from "./services/hashing.service";
import { AuthenticatedUser } from "./types/authenticated-user";

@Injectable()
export class AuthService {
  constructor(
    private readonly auditLogsService: AuditLogsService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly hashingService: HashingService
  ) {}

  async login(loginDto: LoginDto, ipAddress?: string) {
    const user = await this.usersService.findAuthByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException("Invalid credentials.");
    }

    const passwordMatches = await this.hashingService.compare(
      loginDto.password,
      user.passwordHash
    );

    if (!passwordMatches) {
      throw new UnauthorizedException("Invalid credentials.");
    }

    if (!user.isActive) {
      throw new ForbiddenException("User is inactive.");
    }

    await this.usersService.updateLastLoginAt(user.id);
    await this.auditLogsService.logUserAction({
      action: auditActions.authLogin,
      actorUserId: user.id,
      ipAddress,
      metadata: {
        email: user.email,
        role: user.role
      },
      targetId: user.id,
      targetType: "user"
    });

    const accessToken = await this.jwtService.signAsync(
      this.buildAuthenticatedUser({
        email: user.email,
        id: user.id,
        name: user.name,
        role: user.role
      })
    );

    return {
      accessToken,
      tokenType: "Bearer"
    };
  }

  async getProfile(userId: string) {
    const user = await this.usersService.findPublicById(userId);

    if (!user) {
      throw new UnauthorizedException("Authenticated user was not found.");
    }

    return user;
  }

  private buildAuthenticatedUser(input: {
    id: string;
    email: string;
    name: string;
    role: UserRole;
  }): AuthenticatedUser {
    return {
      sub: input.id,
      email: input.email,
      name: input.name,
      role: input.role
    };
  }
}
