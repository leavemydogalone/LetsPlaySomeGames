import React, { useState, useEffect } from "react";
import LetterBox from "./LetterBox";

type Props = {
  scriptString: string;
};

export default function LetterDisplay({ scriptString }: Props) {
  const [letters, setLetters] = useState<String[]>([]);

  useEffect(() => {
    const timeVariable = 1;
    // this will determine how slowly the letters of the script will be added to the letters state
    // and how quickly they will render

    for (let i = 1; i < scriptString.length + 1; i++) {
      setTimeout(() => {
        setLetters((prevLetters: String[]) => [
          ...prevLetters,
          scriptString[i - 1],
        ]);
      }, i * timeVariable);
    }
  }, []);

  return (
    <div className={`letterDisplay `}>
      {letters.map((thing: String, index: number) => (
        <>
          <LetterBox letter={thing} key={index} />
          {thing === "." && <br key={index * 100} />}
        </>
      ))}
    </div>
  );
}
