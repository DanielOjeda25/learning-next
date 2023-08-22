"use client";
import Link from "next/link";
import React from "react";

const UserInfo = ({ user }) => {
  return (
    <div>
      <div className="bg-blue-500  w-full" key={user.id}>
        <Link href={`/about/me/${user.id}`}>
          <h3 className="">
            {user.id}.{user.title}
          </h3>
        </Link>

        <p>{user.body}</p>
        <button onClick={() => alert("Funciona")}>Click</button>
      </div>
    </div>
  );
};

export default UserInfo;
