import { IsOptional, IsString, MaxLength } from "class-validator";

export class SuspendHostingAccountDto {
  @IsOptional()
  @IsString()
  @MaxLength(500)
  reason?: string;
}

