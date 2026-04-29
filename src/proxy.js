import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

// ফাংশনটির নাম অবশ্যই 'proxy' হতে হবে (আগে যেটা middleware ছিল)
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    // সেশন না থাকলে সাইন-ইন পেজে পাঠিয়ে দিবে
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // সেশন থাকলে রিকোয়েস্টটি এগিয়ে নিয়ে যাবে
  return NextResponse.next();
}

export const config = {
  // যেসব পেজে সিকিউরিটি দিতে চান
  matcher: ["/profile", "/all-photos/:path*"],
};
