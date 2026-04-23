import { UserRole } from "@prisma/client";

export type AuthenticatedUser = {
  sub: string;
  email: string;
  name: string;
  role: UserRole;
};

