import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class CreateHostingAccountDto {
  @IsUUID()
  userId!: string;

  @IsUUID()
  planId!: string;

  @IsOptional()
  @IsUUID()
  nodeId?: string;

  @IsString()
  @MinLength(3)
  label!: string;

  @IsOptional()
  @IsString()
  domain?: string;

  @IsString()
  @MinLength(3)
  username!: string;
}

