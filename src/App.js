import React, { useState } from "react";

function ArmstrongChecker() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkArmstrong = () => {
    if (!number) return;

    const num = parseInt(number);
    const digits = number.length;
    let sum = 0;

    for (let digit of number) {
      sum += Math.pow(parseInt(digit), digits);
    }

    if (sum === num) {
      setResult(`${num} is an Armstrong number`);
    } else {
      setResult(`${num} is not an Armstrong number`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Armstrong Number Checker</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
        style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
      />
      <button
        onClick={checkArmstrong}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Check
      </button>
      <div style={{ marginTop: "20px", fontSize: "18px", color: "blue" }}>
        {result}
      </div>
    </div>
  );
}

export default ArmstrongChecker;
