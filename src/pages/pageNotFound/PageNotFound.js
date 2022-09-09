import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="container mx-auto mt-10 px-5 page-not-found">
      <h1 className="text-lightGold opacity-80">404</h1>
      <h2 className="text-lightGold opacity-80">
        Sorry but we couldn’t find the page you are looking for.
      </h2>
      <div className="text-lightGrey m-2">To return to the homepage.</div>
      <button className="bg-lightGold mb-10 mt-2 p-2 hover:opacity-80">
        <Link to="/">Click Here</Link>
      </button>
    </div>
  );
};

export default PageNotFound;
