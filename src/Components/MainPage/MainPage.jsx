import React from "react";
import "./MainPage.scss";

import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="main">
      <h1 className="main__heading">Tech Tatva '20</h1>
      <div className="main__image-container"></div>
      <div className="main__btn-container">
        <Link
          to={`/login`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <button className="main__btn btn">LOGIN</button>
        </Link>

        <Link
          to={`/signup`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <button className="main__btn btn">SIGN UP</button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
