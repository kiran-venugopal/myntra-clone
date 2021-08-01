import React from "react";

export default function SearchInput({
  placeholder = "Search for products, brands and more"
}) {
  return (
    <div className="search-input">
      <div className="icon image"></div>
      <input placeholder={placeholder} />
    </div>
  );
}
