import React, { useEffect } from "react";
type Props = {
  letter: String;
};
export default function LetterBox({ letter }: Props) {
  let style;
  let randomHeightPadding;
  let randomWidthPadding;
  useEffect(() => {
    const randomHeightPadding =
      10 + Math.floor(Math.random() * (2 - -2 + 1)) + -2;
    const randomWidthPadding =
      10 + Math.floor(Math.random() * (2 - -2 + 1)) + -2;
  }, []);

  // style = { padding-top: randomHeightPadding, padd};

  return (
    <div style={style} className="letterBox">
      {letter}
    </div>
  );
}
