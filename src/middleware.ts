import { NextRequest, NextResponse } from "next/server";

const locales = ["pl", "uk"];
const defaultLocale = "pl";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";
  // Check if browser prefers Ukrainian
  if (acceptLanguage.includes("uk")) return "uk";
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
