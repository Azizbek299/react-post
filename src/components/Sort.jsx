import React from "react";

export default function Sort(props) {
  return (
    <div className="sort__container">
      <select
        value={props.selectedSort}
        onChange={e => props.fun(e.target.value)}
      >
        <option disabled>{props.defaultSortValue}</option>

        {props.options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
