import { authMiddleware } from "@clerk/nextjs";
import HomePage from "./app/(marketing)/page";
import DashboardPage from "./app/(application)/(app)/dashboard/page";

export default authMiddleware({
  publicRoutes: ["/", "/blog", "/api/webhooks/user"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
