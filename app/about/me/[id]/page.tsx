import React, { Suspense } from "react";
import Me from "../page";
async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  console.log(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const posts = await loadPost(params.id);
  return (
    <div>
      <h1>{posts.title}</h1>
      <br />
      <p>Otras Publicaciones</p>
      <Suspense fallback={<div>Cargando...</div>}>
        <Me />
      </Suspense>
    </div>
  );
}
export default Page;
