import React from "react";
import { useRecoilState } from "recoil";
import { FiltersAtom } from "../../GlobalStates/Filters";
import Content from "./Content";
import Filters from "./Filters";
import "./main.css";

export default function Main() {
  const [{ selected }, setFilter] = useRecoilState(FiltersAtom);

  return (
    <div className="main-wrapper">
      <div className=" filter-actions ">
        <div className="heading-1 title">Filters</div>
        {!!Object.entries(selected).length && (
          <div
            onClick={() => {
              setFilter((prev) => ({
                ...prev,
                selected: {}
              }));
            }}
            className="link heading-1"
          >
            Clear all
          </div>
        )}
      </div>
      <div className="main">
        <Filters />
        <Content />
      </div>
    </div>
  );
}
