import { Fragment, ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Navbar />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
