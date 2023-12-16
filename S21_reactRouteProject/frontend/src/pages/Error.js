import React from "react";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>404 Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </main>
    </>
  );
};

export default Error;
