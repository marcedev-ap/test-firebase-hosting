import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchResults } from "../hooks";
import { MainButton } from "../ui/buttons";
function SearchResults() {
  const results = useSearchResults();

  return (
    <ul>
      {results.map((r) => (
        <li>
          <Link to={"/item/" + r.id}>
            <MainButton>{r.title}</MainButton>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { SearchResults };
