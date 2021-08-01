import React from "react";
import Content from "./Content";
import Filters from "./Filters";
import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <Filters />
      <Content />
    </div>
  );
}
