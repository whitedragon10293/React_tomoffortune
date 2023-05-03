import React from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "routes";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
