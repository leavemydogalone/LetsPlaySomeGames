import React, { useState, useEffect, useContext } from "react";
import LetterBox from "../components/LetterBox";
import { NameCtx, NameContextInterface } from "../App";

export default function LevelOne() {
  const nameContext = React.useContext(NameCtx);
  const [letters, setLetters] = useState<String[]>([]);
  // array of strings. Will hold the letters/spaces/punctuation from scriptString
  // that will be placed in it on a delay so they render over time
  const [preName, setPreName] = useState<String>("");

  const [inputtable, setInputtable] = useState(false);
  // will spawn render the input box when true

  const scriptString =
    "Welcome. I know that you are eager to begin, but first I will need your name.";

  useEffect(() => {
    const timeVariable = 1;
    // change back to 100
    // this will determine how slowly the letters of the script will be added to the letters state
    // and how quickly they will render

    for (let i = 1; i < scriptString.length + 1; i++) {
      setTimeout(() => {
        setLetters((prevLetters) => [...prevLetters, scriptString[i - 1]]);
      }, i * timeVariable);
    }
    // sets a delay for adding the letters of the script to the state, which will then render them
    // smoothly

    setTimeout(() => {
      setInputtable(true);
    }, scriptString.length * (timeVariable + 40));
    // this will spawn the input box after all of the script has been added multiplied by the delay
  }, []);

  const fadeOut = preName ? "fadeOut" : null;

  return (
    <div className="levelOne">
      <div className={`letterDisplay ${fadeOut}`}>
        {letters.map((thing: String, index) => (
          <>
            <LetterBox letter={thing} key={index} />
            {thing === "." && <br key={index * 100} />}
          </>
        ))}
      </div>

      {inputtable && (
        <div className="nameInputSection">
          <div className="nameDisplay">
            {preName.split("").map((letter: string) => (
              <span className="nameLetter">{letter}</span>
            ))}
          </div>
          <input
            className="input"
            id="levelOneInput"
            type="text"
            value=""
            // value is set to "" (from inputValue) after so that
            // the previous letters do not stay in the input element
            onChange={(e) => {
              setPreName((prevState) => prevState + e.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
}
