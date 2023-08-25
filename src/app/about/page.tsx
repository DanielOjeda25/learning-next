"use client";
import React from "react";
import { useRouter } from "next/navigation";
//Enrutador a base de carpetas
const About = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen">
      About Pagina 2
      <button
        className="bg-sky-500 rounded px-2"
        onClick={() => {
          router.back();
        }}
      >
        Volver
      </button>
    </div>
  );
};

export default About;
