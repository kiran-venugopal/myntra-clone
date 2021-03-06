import React from "react";
import { genders } from "../../../constants";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useRecoilState } from "recoil";
import { FiltersAtom } from "../../../GlobalStates/Filters";
import Checkbox from "@material-ui/core/Checkbox";

export default function Filters() {
  const [
    {
      selected,
      all: { categories, brands }
    },
    setFilterData
  ] = useRecoilState(FiltersAtom);

  function handleChange(e) {
    let target = e.target;

    if (target.name === "gender") {
      setFilterData((prev) => ({
        ...prev,
        selected: {
          ...prev.selected,
          [target.name]: target.value
        }
      }));
      return;
    }

    setFilterData((prev) => {
      let selected = prev.selected?.[target.name] || [];
      selected = selected?.includes(target.value)
        ? selected.filter((f) => f !== target.value)
        : [...selected, target.value];

      return {
        ...prev,
        selected: {
          ...prev.selected,
          [target.name]: selected
        }
      };
    });
  }

  return (
    <div className="filters">
      <div className="genders">
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={selected["gender"]}
          onChange={handleChange}
        >
          {genders.map((g) => (
            <FormControlLabel
              value={g.name}
              control={
                <Radio checked={selected?.gender === g.name} size="small" />
              }
              label={g.name}
            />
          ))}
        </RadioGroup>
      </div>

      <div className="heading-1">Categories</div>

      <div className="categories">
        {categories.slice(0, 10).map((c) => (
          <div key={c} className="category-item">
            <FormControlLabel
              label={c}
              control={
                <Checkbox
                  checked={selected.category?.includes(c) || false}
                  onChange={handleChange}
                  value={c}
                  name="category"
                />
              }
            />
          </div>
        ))}
      </div>

      <div className="heading-1">Brands</div>

      <div className="brands">
        {brands.slice(0, 10).map((b) => (
          <div key={b} className="brand-item">
            <FormControlLabel
              label={b}
              control={
                <Checkbox
                  checked={selected.brand?.includes(b)}
                  onChange={handleChange}
                  value={b}
                  name="brand"
                />
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
