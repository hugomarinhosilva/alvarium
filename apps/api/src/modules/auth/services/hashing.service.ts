import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { genSalt, hash, compare } from "bcrypt";

@Injectable()
export class HashingService {
  constructor(private readonly configService: ConfigService) {}

  async hash(value: string) {
    const saltRounds = Number(
      this.configService.get<string>("BCRYPT_SALT_ROUNDS", "12")
    );
    const salt = await genSalt(saltRounds);

    return hash(value, salt);
  }

  compare(value: string, hashedValue: string) {
    return compare(value, hashedValue);
  }
}

