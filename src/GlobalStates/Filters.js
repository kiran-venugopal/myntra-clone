import { atom } from "recoil";

export const FiltersAtom = atom({
  key: "FILTERS",
  default: {
    all: {
      categories: [],
      brands: []
    },
    selected: {}
  }
});
