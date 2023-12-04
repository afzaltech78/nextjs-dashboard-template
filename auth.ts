import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

async function getUser(email: string): Promise<User | undefined> {
  try {
    //   const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    const user = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      }),
    }).then((res) => res.json());
    // .then(res);

    return {
      ...user,
      email: 'afzal@gmail.com',
      password: '123456',
    };
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          console.log('hhhhhh1');

          const user = await getUser(email);
          console.log('hhhhhh1', user);

          if (!user) return null;
          // const passwordsMatch = await bcrypt.compare(password, user?.password);

          // if (passwordsMatch)return user;

          //this is custom login code here..
          if (email == user?.email && password == user?.password) return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
