import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import NextAuth, { getServerSession } from "next-auth/next";
// import { redirect } from "next/navigation";


const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };