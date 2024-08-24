import React, { Children } from "react";
import classes from "../styles/Layout.module.css";
import Nav from "../components/Nav";
const Layout = ({children}) => {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;