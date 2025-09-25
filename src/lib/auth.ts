import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "../../generated/prisma";
import { nextCookies } from "better-auth/next-js";

// If your Prisma file is located elsewhere, you can change the path


const prisma = new PrismaClient();
export const auth = betterAuth({
    baseURL: "http://localhost:3000",
    database: prismaAdapter(prisma, {
        provider: "mongodb", // or "mysql", "postgresql", ...etc
    }),
      emailAndPassword: { 
    enabled: true, 
  }, 

  plugins: [nextCookies()],
});