import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class SystemController {
  @Get()
  getHealth() {
    return {
      service: "api",
      status: "ready",
      project: "alvarium"
    };
  }
}

