import React, { useContext } from "react";
import Link from "next/link";
import { MyContext } from "@/provider/provider";

const Header = () => {
  const { setSearchValue } = useContext(MyContext);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
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
        onChange={handleChange}
        className="p-1 border border-solid"
      />
    </header>
  );
};

export default Header;
