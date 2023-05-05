import React from "react";
import "./App.css";
import AdviceCard from "./components/AdviceCard";
import ReactDOM from "react-dom/client";
import { axe } from "@axe-core/react";

function App() {
  return (
    <div className="flex justify-center items-center h-screen px-10 container mx-auto">
      <AdviceCard />
    </div>
  );
}

export default App;
if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}
