import {
  Body,
  Controller,
  Ip,
  Param,
  ParseUUIDPipe,
  Patch,
  Post
} from "@nestjs/common";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { AdminOnly } from "../auth/decorators/roles.decorator";
import { AuthenticatedUser } from "../auth/types/authenticated-user";
import { CreateHostingAccountDto } from "./dto/create-hosting-account.dto";
import { SuspendHostingAccountDto } from "./dto/suspend-hosting-account.dto";
import { HostingAccountsService } from "./hosting-accounts.service";

@Controller("hosting-accounts")
export class HostingAccountsController {
  constructor(
    private readonly hostingAccountsService: HostingAccountsService
  ) {}

  @AdminOnly()
  @Post()
  create(
    @Body() createHostingAccountDto: CreateHostingAccountDto,
    @CurrentUser() user: AuthenticatedUser,
    @Ip() ipAddress: string
  ) {
    return this.hostingAccountsService.create(
      createHostingAccountDto,
      user,
      ipAddress
    );
  }

  @AdminOnly()
  @Patch(":id/suspend")
  suspend(
    @Param("id", new ParseUUIDPipe()) id: string,
    @Body() suspendHostingAccountDto: SuspendHostingAccountDto,
    @CurrentUser() user: AuthenticatedUser,
    @Ip() ipAddress: string
  ) {
    return this.hostingAccountsService.suspend(
      id,
      suspendHostingAccountDto,
      user,
      ipAddress
    );
  }
}
