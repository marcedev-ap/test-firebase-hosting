import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSearchResults } from "../hooks";
import { MainButton } from "../ui/buttons";
import { TextField } from "../ui/text-field";
import css from "./search-form.css";

function SearchForm({ style }) {
  const navigate = useNavigate();
  const results = useSearchResults() || [];

  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.query.value;
    navigate("/search/" + query);
  }

  return (
    <form onSubmit={handleSubmit} className={css.root}>
      <TextField name="query" />
      <MainButton>Buscar</MainButton>
      <h4>Resultados:{results.length}</h4>
    </form>
  );
}

export { SearchForm };
