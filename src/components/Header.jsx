import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex max-w-[1200px] m-auto justify-between p-5 items-center sticky z-40">
      <img src="./images/metaLogo.png" alt="logo" className="h-8 w-36" />
      <ul className="flex gap-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <input
        type="text"
        placeholder="Search"
        className="p-1 border border-solid"
      />
    </header>
  );
};

export default Header;
