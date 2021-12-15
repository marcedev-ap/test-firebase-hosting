import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Page2() {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/otro">Link a page 2</Link>
    </div>
  );
}

export { Page2 };
