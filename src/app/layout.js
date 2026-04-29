import Navbar from "@/components/Navbar";
import "./globals.css";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        <Navbar />
        <Banner />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
