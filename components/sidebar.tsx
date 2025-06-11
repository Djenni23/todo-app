"use client";
import React from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";

function Sidebar() {
  const links = [
    { name: "All", path: "/" },
    { name: "Progress", path: "/progress" },
    { name: "Done", path: "/done" },
    { name: "Favorites", path: "/favorites" },
  ];

  const pathname = usePathname();

  return (
    <nav className="bg-[#e0b1f042] w-52 px-5 py-8">
      <Logo></Logo>

      <ul className="flex flex-col gap-3 mt-10">
        {links.map((link) => (
          <li
            key={link.name}
            className={`${
              link.path === pathname
                ? "text-[#000000] font-bold"
                : "text-[#000000]"
            } text-lg`}
          >
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
