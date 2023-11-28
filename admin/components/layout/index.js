import React from "react";
import Sidebar from "../sidebar";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Glamsaga - Admin</title>
        <meta name="description" content="Glamsage - Admin Interface" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {router.route == "/" ? (
        <div> {children} </div>
      ) : (
        <>
          <div className="mainwrap">
            <Sidebar />
            {<div className="children"> {children} </div>}
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
