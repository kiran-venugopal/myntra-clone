import { atom } from "recoil";

export const FiltersAtom = atom({
  key: "FILTERS",
  default: {
    all: {
      main: [
        {
          name: "Men"
        },
        {
          name: "Women"
        },
        {
          name: "Boys"
        },
        {
          name: "Girls"
        }
      ],
      categories: [],
      brands: [],
      prices: [
        {
          name: "Rs 99 to Rs 3000",
          min: 99,
          max: 3000
        }
      ]
    },
    selected: {}
  }
});
