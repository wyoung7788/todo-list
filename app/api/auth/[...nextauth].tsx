import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import User from "@/app/models/User";
import { JWT } from "next-auth/jwt";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],
  
    secret: process.env.NEXTAUTH_SECRET,
    };
export default NextAuth(authOptions);