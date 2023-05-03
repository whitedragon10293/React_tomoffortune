import React from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import Header from "components/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
