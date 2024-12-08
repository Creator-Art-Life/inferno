import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/api/clerk-webhook(.*)',
  '/api/drive-activity/notification(.*)',
  '/api/payment/success(.*)'
]);

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])
const isIgnoredRoute = createRouteMatcher([
  '/api/auth/callback/discord(.*)',
  '/api/auth/callback/notion(.*)',
  '/api/auth/callback/slack(.*)',
  '/api/flow(.*)',
  '/api/cron/wait(.*)'
]);

export default clerkMiddleware(async (auth, request) => {
  if (isProtectedRoute(request)) await auth.protect()
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};