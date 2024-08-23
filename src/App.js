import React from "react";
import Main from "./components/pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
