import Link from "next/link";
import React from "react";

export default function Notfound() {
  return (
    <div>
      <h1>Pagina no encontrada</h1>
      <Link href={"/"}>Inicio</Link>
    </div>
  );
}
