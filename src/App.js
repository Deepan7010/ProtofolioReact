import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Appbar from "./components/Appbar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Appbar />
    </BrowserRouter>
  );
};

export default App;
