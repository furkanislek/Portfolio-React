import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontSize: "4rem",
          fontWeight: "800",
          color: "rgb(0, 23, 55)",
        }}
      >
        Go Web Site
      </Link>
    </div>
  );
}

export default NotFound;
