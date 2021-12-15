import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/layout";
import { Page2 } from "pages/Page2";
import { Home } from "pages/home";
import { Search } from "pages/Search";
import { SearchResults } from "pages/SearchResults";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Route>
    </Routes>
  );
}
export { AppRoutes };
