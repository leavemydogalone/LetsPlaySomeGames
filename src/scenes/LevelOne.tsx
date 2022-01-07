import React, { useState, useEffect } from "react";

export default function LevelOne() {
  const [letters, setLetters] = useState<String[]>([]);

  const [inputValue, setInputValue] = useState<string>("");
  // setting the value of the input to a blank string after a letter has been
  // entered will prevent multiple letters from being added in each position
  // of the letters array

  function addLetter(input: string): void {
    setLetters([...letters, input]);
  }

  return (
    <div className="levelOne">
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={(e) => {
          addLetter(e.target.value);
        }}
      />
      <div className="nameDisplay">
        {letters.map((thing) => (
          <div className="letter-box">{thing}</div>
        ))}
      </div>
    </div>
  );
}
