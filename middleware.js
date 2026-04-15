/*import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);

  return NextResponse.redirect(new URL("/about", request.url));
}*/

// Import the Auth.js middleware function you configured earlier
// This is NOT just a session getter — here it acts as a request guard (protector)
import { auth } from "@/app/_lib/auth";

// Tell Next.js:
// "Use Auth.js as middleware for incoming requests"
export const middleware = auth;

/*
What this does internally:

For every matched request:
1. Reads the user's session (from cookies / JWT)
2. Calls your `authorized()` callback:
     authorized({ auth }) {
       return !!auth?.user;
     }

3. If TRUE  → allow request to continue
4. If FALSE → block and redirect to login page (/login)
*/

// Configure where this middleware should run
export const config = {
  // Only run middleware on these routes
  matcher: ["/account"],
};
