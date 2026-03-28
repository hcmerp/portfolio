"use client";

import { footer } from "framer-motion/client";
import { link } from "fs";
import colors from "tailwindcss/colors";

const Footer = () => {
  return (
    <footer className="w-full px-6 pb-8 mt-20">
      <div
        className="max-w-2xl mx-auto rounded-2xl px-8 py-5 flex items-center justify-between border border-white/15 transition-all duration-500"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: `
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1),
            0 8px 32px rgba(0, 0, 0, 0.2)
          `,
        }}
      >
        {/* Name */}
        <span className="text-white text-sm font-mono">
          © {new Date().getFullYear()} PremchP.
        </span>

        {/* Links */}
        <div className="flex items-center gap-10">
          {[
            { label: "About", href: "./about" },
            { label: "Works", href: "#" },
            { label: "Competition", href: "./competition" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-sm hover:text-white/90 transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;