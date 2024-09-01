
import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";

import Footer from "./Footer";
import ChatbotUI from "./ChatbitUI";

const MainLayout = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-zinc-50">
      <Header />
      <main>
        <Welcome />
       <ChatbotUI />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
