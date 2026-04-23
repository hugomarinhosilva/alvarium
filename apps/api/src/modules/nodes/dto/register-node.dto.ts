import { IsIP, IsOptional, IsString, MinLength } from "class-validator";

export class RegisterNodeDto {
  @IsString()
  @MinLength(3)
  name!: string;

  @IsString()
  @MinLength(3)
  slug!: string;

  @IsString()
  @MinLength(3)
  hostname!: string;

  @IsOptional()
  @IsIP("4")
  ipv4?: string;

  @IsOptional()
  @IsString()
  location?: string;
}

