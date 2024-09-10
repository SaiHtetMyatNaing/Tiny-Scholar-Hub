import { clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


const isProtectedRoute = createRouteMatcher([
  '/workbook',
  '/admin-dashboard',
]);

  export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) {
      try {
        await auth().protect();
      } catch (error : unknown) {
        handleAuthenticationError(error);
        return NextResponse.redirect(new URL('/sign-in', req.url), { status: 302 });
      }
    }
  });

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};


function handleAuthenticationError(error: unknown) {
  if (error instanceof Error) {
    console.error('Authentication Error:', error.message);
  } else {
    console.error('An unknown error occurred:', error);
  }
}
