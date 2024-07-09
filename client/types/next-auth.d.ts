import {DefaultSession} from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    apitoken?: string | undefined | null;
    user?: {
      username?: string | undefined | null;
      profile?: string | undefined | null;
    };
  }
}

declare module "next-auth" {
  interface Session {
    apiToken?: string | undefined | null;
    id?: string | undefined | null;
    profile?: string | undefined | null;
    user: {
      username?: string | undefined | null;
      uid?: string | undefined | null;
    } & DefaultSession["user"];
  }
}
