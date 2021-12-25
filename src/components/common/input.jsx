import React from "react";

const Input = ({ onChange, Name, value, error, label, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={Name}>{label}</label>
      <input
        type={type}
        id={Name}
        className="form-control"
        name={Name}
        value={value}
        onChange={onChange}
      />

      {error && <div className="alert alert-danger">{error} </div>}
    </div>
  );
};

export default Input;
