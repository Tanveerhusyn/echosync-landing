"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = () => {
  const pathname = usePathname();

  const links = [{ href: "/docs", label: "Introduction" }];

  return (
    <>
      {links.map((link, index) => (
        <li key={index} className="block">
          <Link
            href={link.href}
            className={`flex w-full rounded-lg px-4 py-2.5 text-base transition-all duration-200 hover:bg-primary hover:text-white
              ${
                pathname === link.href
                  ? "bg-primary text-white"
                  : "text-black dark:text-white"
              }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default SidebarLink;
