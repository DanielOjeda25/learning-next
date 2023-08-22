import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <nav className="">
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
