"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "", href: "/", image: "/pol-logo.png" },
  { label: "Catalog", href: "/catalog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed z-10">
      {/* Announcement Bar */}
      <div className="flex items-center justify-center min-w-screen h-8 bg-rose-300 text-white text-[12px] font-semibold">
        <p className="uppercase tracking-widest">Stay in Love, Bees!</p>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-center items-center min-w-screen h-15 bg-rose-50 text-stone-900 text-[15px]">
        <ul className="flex gap-12 tracking-wide">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            if (link.image) {
              return (
                <li key={index}>
                  <Link href={link.href}>
                    <img
                      src={link.image}
                      className="h-10 w-auto object-contain"
                    />
                  </Link>
                </li>
              );
            }

            return (
              <li key={link.href} className="mt-3">
                <Link
                  href={link.href}
                  className={`${isActive ? "text-rose-400" : "hover:text-rose-400 transition-colors duration-200 cursor-pointer"}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
