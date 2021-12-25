import React from "react";

const SearchBox = ({ onChange, value }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="...Search"
        className="form-control my-3"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
