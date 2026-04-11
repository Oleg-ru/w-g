import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

//Защита только указанных маршрутов от несанк. доступа
// const isProtectedRoute = createRouteMatcher(['/user-profile']);
// export default clerkMiddleware(async (auth, req) => {
//     if (isProtectedRoute(req)) {
//         await auth.protect()
//     }
// });

//Защита всех маршрутов по умолчанию, а перечисляем к каким не нужна
const isPublicRoute = createRouteMatcher(['/', '/signin(.*)', '/signup(.*)',]);
export default clerkMiddleware(async (auth, req) => {

    const {userId, redirectToSignIn} = await auth();
    if (!userId && !isPublicRoute(req)) {
        return redirectToSignIn;
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