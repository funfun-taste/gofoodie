import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";
import { AuthOptions, User } from "next-auth";
import { userCheckApi } from "@apis/users";

const clientId = process.env.KAKAO_CLIENT_ID || "";
const clientSecret = process.env.KAKAO_CLIENT_SECRET || "";
export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId,
      clientSecret,
    }),
  ],
  callbacks: {
    async signIn(user: any) {
      try {
        return {
          ...user,
        };
      } catch (e) {
        console.log(e);
      }
    },
    async jwt({ user, token, account }) {
      if (user && Object.entries(user) && account) {
        const id = account.providerAccountId;
        console.log(token, account, user);
        await userCheckApi(user as User);
        // token.apiToken = data.data.token;
        // token.id = id;
        // token.profile = data.data.profile;
      }
      return token;
    },
    async session({ token, session }) {
      session.apiToken = token.apiToken as unknown as string;
      session.id = token.id as unknown as string;
      session.profile = token.profile as unknown as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
