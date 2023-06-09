import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import EmailProvider from "next-auth/providers/email";

import { prisma } from "@/libs/prisma";

const EMAIL_SERVER = process.env.EMAIL_SERVER;
const EMAIL_FROM = process.env.EMAIL_FROM;
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

if (!EMAIL_SERVER ||!EMAIL_FROM ||!NEXTAUTH_SECRET) {
  throw new Error(
    // "Please set EMAIL_SERVER, EMAIL_FROM and NEXTAUTH_SECRET environment variables"
    "message: EMAIL_SERVER or EMAIL_FROM or NEXTAUTH_SECRET not found"
  );
}

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: EMAIL_SERVER,
      from: EMAIL_FROM,
    }),
  ],
  secret: NEXTAUTH_SECRET,
})

