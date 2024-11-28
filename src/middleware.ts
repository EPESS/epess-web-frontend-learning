import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/support(.*)', '/workshop(.*)', '/document(.*)']);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }

  // const userId = auth().userId;

  // console.log(userId);

  // if (!userId) {
  //   return NextResponse.redirect(new URL('/auth/sign-in', req.url));
  // }

  // const sessionId = auth().sessionId;
  // console.log(sessionId);
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
