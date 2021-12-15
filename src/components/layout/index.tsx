import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "components/SearchForm";
import css from "./layout.css";

const footerStyles = { border: "solid 3px red", padding: 40 };

function Layout() {
  return (
    <div className={css.root}>
      <header>
        <SearchForm style={{ backgroundColor: "red" }} />
      </header>
      <Outlet />
      <footer style={footerStyles}>Soy el footer</footer>
    </div>
  );
}

export { Layout };
