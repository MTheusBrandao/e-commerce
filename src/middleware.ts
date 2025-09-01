import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Roda em todas as rotas, exceto arquivos estáticos do Next.js
    "/((?!_next|.*\\..*).*)",
    // Sempre roda em API
    "/(api|trpc)(.*)",
  ],
};
