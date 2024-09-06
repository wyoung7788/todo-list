import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from "next-auth/providers/github";
export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        GithubProvider({

        })
    ],
    callbacks:{
        async jwt({token, account}){
            if (account){
                token.id = account.providerAccountId
                token.accessToken = account.access_token
            }
            return token
        },
        async session({session, token}){
            session.user.userId = token.id;
            session.user.accessToken = token.accessToken
            return session;
        },
        async redirect({url, baseUrl}){
            return url.startsWith(baseUrl)
            ? url
            : `${baseUrl}/protected/client`;
        }
    }

}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST};