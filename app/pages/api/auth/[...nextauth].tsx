import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.Google_SECRET,
        }),
    ],
    session: {
        strategy: 'jwt',
    },
};
export default NextAuth(authOptions);