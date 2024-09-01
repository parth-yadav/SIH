/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import ContentBox from "./ContentBox";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-zinc-50">
      <Header />
      <main>
        <Welcome />
        <ContentBox />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;