import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
   '/',
   '/about-us',
   '/contact-us',
   '/privacy-policy',
   '/terms-and-condition',
   '/testing-page'
  
  ])

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect()
  }
})

