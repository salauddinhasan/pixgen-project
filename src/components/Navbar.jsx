"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b px-3">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            width={30}
            height={30}
            className="object-cover"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-photos">All Photos</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-4 text-sm">
          <Link href="/signup">SignUp</Link>
          <Link href="/signin">SignIn</Link>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-xl">
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/all-photos">All Photos</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>

          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link href="/signup">SignUp</Link>
            <Link href="/signin">SignIn</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
