import React from "react";
import Footer from "./BasicLayout/Footer";
import Header from "./BasicLayout/Header";

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <header className="header  ">
        <Header />
      </header>
      <main className="main "> {children} </main>

      <footer className="footer ">
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
