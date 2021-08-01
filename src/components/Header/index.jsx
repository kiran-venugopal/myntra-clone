import React from "react";
import { links } from "../../constants";
import "./header.css";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="header">
      <div className="logo image"></div>
      <div className="links">
        {links.map((link) => (
          <div key={link} className="link-item heading-1">
            {link}
          </div>
        ))}
      </div>
      <div className="search">
        <SearchInput />
      </div>
      <div className="options"></div>
    </div>
  );
}
