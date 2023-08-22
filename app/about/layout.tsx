import Link from "next/link";
import React from "react";
//Se puede crear un layout para cada pagina
const Aboutlayout = ({ children }) => {
  return (
    <>
      <nav className="bg-red-800 w-full">
        <ul className="flex justify-around items-center ">
          <Link href={"/about/me"}>About me</Link>
          <Link href={"/"}>home</Link>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default Aboutlayout;
