import { useState, useEffect } from "react";
import Number from "./Number";
import "./App.css";

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(4, 1fr)",
  width: "30%",
};

const inpStyle = {
  width: "24%",
  height: "1.7rem",
  marginLeft: "1.8rem",
};

function App() {
  const [code, setCode] = useState("");
  const [mess, setMess] = useState("");
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    if (code.length === 4) {
      if (code === "5077") {
        setMess("Valid code");
      } else {
        setMess("Invalid code");
      }

      setCode("");
    }
  }, [code]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {mess}
      <input type="text" style={inpStyle} value={code} />
      <div style={style}>
        {nums.map((ele) => (
          <Number
            num={ele}
            className={ele === 0 ? "zero" : ""}
            onClick={(e) => {
              setCode((prev) => prev + ele.toString());
              setMess("");
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
