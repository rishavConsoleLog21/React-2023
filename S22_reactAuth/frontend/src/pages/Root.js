import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  
  useEffect(() => {
    if (!token) {
      return;
    }

    if(token === "EXPIRED") {
      localStorage.removeItem("token");
      localStorage.removeItem("expiration");
      return;
    }

    const tokenDuration = getTokenDuration()

    setTimeout(() => {
      submit(null, { method: "POST", action: "/logout" });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
