// The middleware matches a locale for the request and handles redirects
// and rewrites accordingly.

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "kk", "ru"],

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(kk|ru|en)/:path*"],
};
