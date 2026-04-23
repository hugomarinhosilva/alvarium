import { Body, Controller, Ip, Post } from "@nestjs/common";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { AdminOnly } from "../auth/decorators/roles.decorator";
import { AuthenticatedUser } from "../auth/types/authenticated-user";
import { RegisterNodeDto } from "./dto/register-node.dto";
import { NodesService } from "./nodes.service";

@Controller("nodes")
export class NodesController {
  constructor(private readonly nodesService: NodesService) {}

  @AdminOnly()
  @Post()
  register(
    @Body() registerNodeDto: RegisterNodeDto,
    @CurrentUser() user: AuthenticatedUser,
    @Ip() ipAddress: string
  ) {
    return this.nodesService.register(registerNodeDto, user, ipAddress);
  }
}

