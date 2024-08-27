import { connectDB } from "./mongodb";
import User from "@/app/models/User";
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

var bcrypt = require('bcryptjs');

export const authOptions: NextAuthOptions ={
    providers: [
        Credentials({
            name: "Credentials",
            id: "credentials",
            credentials:{
                email: { label: "Email", type: "text"},
                password: { label: "Password", type: "password"},
            },
            async authorize(credentials) {
                await connectDB();
                const user = await User.findOne({
                    email: credentials?.email,
                }).select("+password");

                if (!user) throw new Error("Wrong Email");

                const passwordMatch = await bcrypt.compare(
                    credentials!.password,
                    user.password
                );
                if (!passwordMatch) throw new Error("Wrong Password");
                return user;
            },
        })
    ],
    session: {
        strategy: "jwt",
    }
};