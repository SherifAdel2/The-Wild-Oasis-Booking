import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  // 🌐 Authentication providers (how users log in)
  providers: [
    Google({
      // These come from Google Cloud Console
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  // ⚙️ Callbacks = hooks that run during auth lifecycle
  callbacks: {
    // 🔐 Middleware-like check (used for route protection)
    authorized({ auth, request }) {
      // If user is logged in → allow access
      // If not → block (redirect handled elsewhere)
      return !!auth?.user;
    },

    // 🚪 Runs when user tries to sign in
    //It runs AFTER the provider (Google) successfully authenticates the user,
    //  but BEFORE Auth.js completes the login and creates the session
    // You now decide:
    // allow login ✅
    // or block it ❌
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest)
          await createGuest({
            email: user.email,
            fullName: user.name,
          });

        // Allow login
        return true;
      } catch {
        // If something fails → block login
        return false;
      }
    },

    // 📦 Runs whenever a session is created/accessed
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);

      // Adding guestId to session
      session.user.guestId = guest.id;

      // Return updated session
      return session;
    },
  },

  // 📄 Custom pages
  pages: {
    // Instead of default Auth.js login page → use your own
    signIn: "/login",
  },
};

export const {
  auth, // 🧠 Get current session (server-side)
  signIn, // 🔑 Trigger login
  signOut, // 🚪 Logout
  handlers: { GET, POST }, // ⚙️ API handlers (used in route.ts)
} = NextAuth(authConfig);
