// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protect all `/humains/*`
    '/humains/:path*',
    // Protect `/my-journey` (and any deeper paths, if you ever add them)
    '/my-journey',        // covers exactly `/my-journey`
    '/my-journey/:path*', // covers `/my-journey/...`
  ],
};