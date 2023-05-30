import React from "react";

const style = {
  height: "2rem",
  padding: "1rem",
  fontSize: "1rem",
  background: "black",
  color: "white",
  margin: ".5rem",
  borderRadius: "4px",
  cursor: "pointer",
};

const Number = ({ num, className, onClick }) => {
  return (
    <div style={style} className={className} onClick={onClick}>
      {num}
    </div>
  );
};

export default Number;
