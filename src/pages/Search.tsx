import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Search() {
  const params = useParams();

  useEffect(() => {
    console.log("acá harías un fetch usando el param", params.busqueda);
  }, [params]);

  return (
    <div>
      Soy el buscador
      <Link to="/">Link a la home</Link>
      <Link to="/search/termos">Link a busqueda de termos</Link>
    </div>
  );
}

export { Search };
