import UserInfo from "@/components/UserInfo";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Acerca de me",
};
async function loadUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function Me() {
  const data = await loadUser();

  return (
    <div className="w-full h-screen  z-50">
      {data.map((user: { id: React.Key | null | undefined }) => (
        <UserInfo user={user} key={user.id} />
      ))}
    </div>
  );
}

export default Me;
