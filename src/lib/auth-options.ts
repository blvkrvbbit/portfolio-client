import { NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import db from '../db/db';
import { compare } from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const foundUser = await db.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        const passwordCorrect = await compare(
          credentials?.password as string,
          foundUser?.password as string
        );

        if (passwordCorrect) {
          return {
            id: foundUser?.id as string,
            email: foundUser?.email,
            name: foundUser?.name,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    session: ({ session, token, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
    jwt: async ({ user, token, trigger, session }) => {
      if (trigger === 'update') {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
  },
};
