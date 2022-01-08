import React, { useState, useEffect } from "react";

export default function LevelOne() {
  const [letters, setLetters] = useState<String[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  // setting the value of the input to an empty string after a letter has been
  // entered will prevent multiple letters from being added in each position
  // of the letters array

  const [inputtable, setInputtable] = useState(false);

  const scriptString =
    "Welcome. I know that you are eager to begin, but first I will need your name.";

  useEffect(() => {
    for (let i = 1; i < scriptString.length + 1; i++) {
      setTimeout(() => {
        setLetters((prevLetters) => [...prevLetters, scriptString[i - 1]]);
      }, i * 100);
    }
  }, []);

  useEffect(() => {
    if (letters.length === scriptString.length) setInputtable(true);

    console.log(letters.length, scriptString.length);
  }, [letters]);

  return (
    <div className="levelOne">
      {/* make letter display its own component. May use the letters throughout the levels */}
      <div className="letterDisplay nameDisplay">
        {letters.map((thing, index) => (
          <>
            <div key={index} className="letter-box">
              {thing}
            </div>
            {thing === "." && <br key={index * 100} />}
          </>
        ))}
      </div>

      {inputtable && (
        <input
          className="input"
          id="levelOneInput"
          type="text"
          value={inputValue}
          // value is set to "" of inputValue after so that
          // the previous letters do not stay in the input element
          onChange={(e) => {
            setLetters([...letters, e.target.value]);
          }}
        />
      )}
    </div>
  );
}
